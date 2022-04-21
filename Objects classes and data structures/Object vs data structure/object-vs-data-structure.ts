class Database {

  private readonly uri: string;
  private provider: any;
  public connection: any;

  constructor(uri: string, provider: any) {
    this.uri = uri;
    this.provider = provider;
  }

  connect() {
    try {
      this.connection = this.provider.getConnection(this.uri);
    } catch (error) {
      throw new Error('Could not connect!');
    }
  }

  disconnect() {
    this.connection.close();
  }
}

let sqlEngine: any;
const database = new Database('my-database:8100', sqlEngine);
database.connect();
database.connection.close();

const array = [1, 2, 3, 4, 5];
const tuple: readonly [number, string, boolean] = [1, 'a', true];
const immutableMatrix: ReadonlyArray<ReadonlyArray<number>> = [
  [1, 2, 3],
  [4, 5, 6],
];
// @ts-ignore
const dictionary = new Map<string, number>([
  ['John', 10],
  ['Jane', 20],
]);
const dictionary2: Record<string, number> = {
  John: 10,
  Jane: 20,
};

interface UserCredentials {
  email: string;
  password: string;
}
