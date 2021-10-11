class Hotel {
  public readonly name: string;
  public readonly address: string;
  public readonly stars: number;
  public readonly rooms: Room[] = [];

  public constructor(name: string, address: string, stars: number) {
    this.name = name;
    this.address = address;
    this.stars = stars;
  }

  addRoom(room: Room) {
    this.rooms.push(room);
  }

  private printRooms(minComfort?: number) {
    for (let room of this.rooms) {
      if (room.comfort() > minComfort || minComfort === undefined) {
        room.printData();
      }
    }
  }

  printData(onlyComfort?: boolean): void {
    console.log(this.name);
    console.log(this.address);
    console.log(this.stars);
    console.log('========');

    if (onlyComfort) {
      this.printRooms(15);
    } else {
      this.printRooms();
    }
  }
}

class Room {
  public size: number;
  public capacity: number;

  constructor(size: number, capacity: number) {
    this.size = size;
    this.capacity = capacity;
  }

  comfort(): number {
    let erdve = this.size / this.capacity;
    return erdve;
  }

  printData(): void {
    console.log(`Dydis: ${this.size}`);
    console.log(`Kiekis: ${this.capacity}`);
    console.log(`Komforto lygis: ${this.comfort().toFixed(2)}`);
    console.log('-----');
  }
}

class Spa extends Room {
  public poolSize: number;
  public poolTemperature: number;

  constructor(
    size: number,
    capacity: number,
    poolSize: number,
    poolTemerature: number
  ) {
    super(size, capacity);
    this.poolSize = poolSize;
    this.poolTemperature = poolTemerature;
  }

  comfort(): number {
    let erdveComfort = (this.size - this.poolSize) / this.capacity;
    return erdveComfort;
  }

  printData(): void {
    super.printData();
    console.log(`Baseino dydis: ${this.poolSize}`);
    console.log(`Vandens siluma: ${this.poolTemperature}`);
  }
}

const room1: Room = new Room(33, 2);
const room2: Room = new Room(45, 4);
const room3: Spa = new Spa(120, 6, 18, 28);

const hotel: Hotel = new Hotel(
  'Viešbutis "Neatrastas"',
  'Adresas: Žirmūnų g. 656C, Vilnius',
  3
);

hotel.addRoom(room1);
hotel.addRoom(room2);
hotel.addRoom(room3);

hotel.printData(true);
