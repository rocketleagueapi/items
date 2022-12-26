import products from './parsed/products.json';
import { duplicates } from './specialMap';

const entries = Object.entries(products);
for (const [id, product] of Object.entries(products)) {
    if (product.slot !== 2) continue;
    const duplicate = entries.find(
        ([pid, p]) =>
            p.name === product.name && pid < id && p.special === product.special && p.slot === 2 && !duplicates.includes(Number(pid))
    );
    if (duplicate) {
        console.log(`Duplicate name: ${product.name} (${duplicate[0]}) (${id})`);
    }
}
