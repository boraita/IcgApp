import { owner } from './owner';
import faker from 'faker';

const getOwners = () => createOuners(3);

function createOuners(many: number = 1) {
    const array = [];
    for (let index = 0; index < many; index++) {
        const newOwner: owner = {
            name: faker.name.findName(),
            email: faker.internet.email(),
            address: faker.address.streetAddress(),
            phone: faker.phone.phoneNumber()
        }
        array.push(newOwner);
    }
    return array
}

export {
    getOwners
}
