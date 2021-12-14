import { writeFileSync } from 'fs';
import path from 'path';
import CertificationDump from './bakkesmod/CertificationDump.json';
import PaintDump from './bakkesmod/PaintDump.json';
import ProductDump from './bakkesmod/ProductDump.json';
import SeriesDump from './bakkesmod/SeriesDump.json';
import SlotDump from './bakkesmod/SlotDump.json';
import SpecialEditionDump from './bakkesmod/SpecialEditionDump.json';

function write(name: string, data: any) {
    writeFileSync(path.join(__dirname, './parsed/', `${name}.json`), JSON.stringify(data, null, 2));
}

const certs = CertificationDump.reduce((acc, c) => {
    acc[c['Certified Database Id']] = c['Certified Database Label'];
    return acc;
}, {} as Record<number, string>);
write('certs', certs);

// Filter out modded paints
const paints = PaintDump.filter(p => p['Paint Database Id'] <= 12).reduce((acc, p) => {
    acc[p['Paint Database Id']] = p['Paint Database Label'];
    return acc;
}, {} as Record<number, string>);
write('paints', paints);

const products = ProductDump.reduce((acc, p) => {
    acc[p['Product Id']] = {
        name: p['Product Long Label'],
        blueprint: p['Product Blueprint'],
        paintable: p['Product Paintable'],
        currency: p['Product Currency'],
        quality: p['Product Quality Id'],
        slot: p['Slot Index']
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

const specials = SpecialEditionDump.reduce((acc, s) => {
    acc[s['Special Database Id']] = s['Special Database Label'];
    return acc;
}, {} as Record<number, string>);
write('specials', specials);
