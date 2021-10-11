class Hotel {
    constructor(name, address, stars) {
        this.rooms = [];
        this.name = name;
        this.address = address;
        this.stars = stars;
    }
    addRoom(room) {
        this.rooms.push(room);
    }
    printRooms(minComfort) {
        for (let room of this.rooms) {
            if (room.comfort() > minComfort || minComfort === undefined) {
                room.printData();
            }
        }
    }
    printData(onlyComfort) {
        console.log(this.name);
        console.log(this.address);
        console.log(this.stars);
        console.log('========');
        if (onlyComfort) {
            this.printRooms(15);
        }
        else {
            this.printRooms();
        }
    }
}
class Room {
    constructor(size, capacity) {
        this.size = size;
        this.capacity = capacity;
    }
    comfort() {
        let erdve = this.size / this.capacity;
        return erdve;
    }
    printData() {
        console.log(`Dydis: ${this.size}`);
        console.log(`Kiekis: ${this.capacity}`);
        console.log(`Komforto lygis: ${this.comfort().toFixed(2)}`);
        console.log('-----');
    }
}
class Spa extends Room {
    constructor(size, capacity, poolSize, poolTemerature) {
        super(size, capacity);
        this.poolSize = poolSize;
        this.poolTemperature = poolTemerature;
    }
    comfort() {
        let erdveComfort = (this.size - this.poolSize) / this.capacity;
        return erdveComfort;
    }
    printData() {
        super.printData();
        console.log(`Baseino dydis: ${this.poolSize}`);
        console.log(`Vandens siluma: ${this.poolTemperature}`);
    }
}
const room1 = new Room(33, 2);
const room2 = new Room(45, 4);
const room3 = new Spa(120, 6, 18, 28);
const hotel = new Hotel('Viešbutis "Neatrastas"', 'Adresas: Žirmūnų g. 656C, Vilnius', 3);
hotel.addRoom(room1);
hotel.addRoom(room2);
hotel.addRoom(room3);
hotel.printData(true);
