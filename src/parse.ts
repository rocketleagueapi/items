import { writeFileSync } from 'fs';
import path from 'path';
import CertificationDump from './bakkesmod/CertificationDump.json';
import PaintDump from './bakkesmod/PaintDump.json';
import ProductDump from './bakkesmod/ProductDump.json';
import SeriesDump from './bakkesmod/SeriesDump.json';
import SlotDump from './bakkesmod/SlotDump.json';
import SpecialEditionDump from './bakkesmod/SpecialEditionDump.json';
import MapDump from './bakkesmod/MapDump.json';
import PlaylistDump from './bakkesmod/PlaylistDump.json';
import TitleDump from './bakkesmod/TitleDump.json';
import specialMap from './specialMap';

function write(name: string, data: any) {
    writeFileSync(path.join(__dirname, './parsed/', `${name}.json`), JSON.stringify(data, null, 2));
}

const certs = CertificationDump.reduce((acc, c) => {
    acc[c['Certified Database Id']] = c['Certified Database Label'];
    return acc;
}, {} as Record<number, string>);
write('certs', certs);

// Filter out modded paints
const paints = PaintDump.filter(p => p['Paint Database Id'] <= 13).reduce((acc, p) => {
    acc[p['Paint Database Id']] = p['Paint Database Label'];
    return acc;
}, {} as Record<number, string>);
write('paints', paints);

const specials = SpecialEditionDump.reduce((acc, s) => {
    acc[s['Special Database Id']] = s['Special Database Label'];
    return acc;
}, {} as Record<number, string>);
write('specials', specials);

const specialsInverse: Record<string, number> = Object.fromEntries(Object.entries(specials).map(a => a.reverse()));
const specialPattern = new RegExp(`: (${Object.values(specials).join('|')})$`);

const products = ProductDump.reduce((acc, p) => {
    const untradable = p['Product Quality Id'] === 9 || (p['Product Quality Id'] === 0 && !p['Product Paintable']);
    const id = p['Product Id'];
    let name = p['Product Long Label'];

    const match = name.match(specialPattern)?.[0] ?? '';
    if (match) name = name.replace(specialPattern, '');
    const special = specialMap[id] ?? specialsInverse[match] ?? 0;

    acc[id] = {
        name,
        blueprint: p['Product Blueprint'],
        special,
        paintable: p['Product Paintable'],
        currency: p['Product Currency'],
        quality: p['Product Quality Id'],
        slot: p['Slot Index'],
        tradable: untradable ? false : !p['Product Trade Restrictions'].find(r => r === 'P2P'),
        tradeIn: untradable ? false : !p['Product Trade Restrictions'].find(r => r === 'TradeIn')
    };
    return acc;
}, {} as Record<number, any>);
write('products', products);

const series = SeriesDump.reduce((acc, s) => {
    acc[s['Database Series Id']] = s['Database Series Label'];
    return acc;
}, {} as Record<number, string>);
write('series', series);

const slots = SlotDump.reduce((acc, s) => {
    acc[s['Slot Index']] = s['Slot Label'] === 'None' ? s['Slot Label'] : s['Slot Online Label'];
    return acc;
}, {} as Record<number, string>);
write('slots', slots);

const maps = MapDump.reduce((acc, m) => {
    acc[m['Map File Name']] = {
        name: m['Map Base Name'],
        variant: m['Map Variant Name']
    };
    return acc;
}, {} as Record<string, any>);
write('maps', maps);

const playlists = PlaylistDump.reduce((acc, p) => {
    acc[p['Playlist Id']] = {
        name: p['Playlist Title'],
        description: p['Playlist Description'],
        ranked: p['Playlist Ranked'],
        players: p['Playlist Player Count'] / 2
    };
    return acc;
}, {} as Record<number, any>);
write('playlists', playlists);

const titles = TitleDump.reduce((acc, t) => {
    acc[t['Title Database Id']] = {
        name: t['Title Database Text'],
        color: t['Title Database Color']
    };
    return acc;
}, {} as Record<string, any>);
write('titles', titles);
