import type {Customer, Game} from "./domain";
import type {CustomerFilter, CustomerInput, GameInput} from "./schemas";

export interface CustomerRepository {
  create(input: CustomerInput): Customer;
  update(id: number, input: CustomerInput): Customer | undefined;
  delete(id: number): boolean;
  findById(id: number): Customer | undefined;
  findAll(filter: CustomerFilter): Customer[];
}

export class InMemoryCustomerRepository implements CustomerRepository {
  private readonly customers = new Map<number, Customer>();
  private nextId = 1;

  create(input: CustomerInput): Customer {
    const customer: Customer = {id: this.nextId++, ...input};
    this.customers.set(customer.id, customer);
    return {...customer};
  }
  update(id: number, input: CustomerInput): Customer | undefined {
    if (!this.customers.has(id)) return undefined;
    const customer: Customer = {id, ...input};
    this.customers.set(id, customer);
    return {...customer};
  }
  delete(id: number): boolean {
    return this.customers.delete(id);
  }
  findById(id: number): Customer | undefined {
    const value = this.customers.get(id);
    return value ? {...value} : undefined;
  }
  findAll(filter: CustomerFilter): Customer[] {
    const contains = (value: string | undefined, query: string | undefined) =>
      !query || (value ?? "").toLowerCase().includes(query.toLowerCase());
    return Array.from(this.customers.values())
      .filter(c => contains(c.documentId, filter.documentId) && contains(c.name, filter.name))
      .map(c => ({...c}));
  }
}

export interface GameRepository {
  create(input: GameInput): Game;
  update(id: number, input: GameInput): Game | undefined;
  findById(id: number): Game | undefined;
}

export class InMemoryGameRepository implements GameRepository {
  private readonly games = new Map<number, Game>();
  private nextId = 1;

  create(input: GameInput): Game {
    const game: Game = {id: this.nextId++, ...input};
    this.games.set(game.id, game);
    return {...game};
  }
  update(id: number, input: GameInput): Game | undefined {
    if (!this.games.has(id)) return undefined;
    const game: Game = {id, ...input};
    this.games.set(id, game);
    return {...game};
  }
  findById(id: number): Game | undefined {
    const game = this.games.get(id);
    return game ? {...game} : undefined;
  }
}
