import type {Customer, Game} from "./domain";
import {HttpError} from "./errors";
import type {CustomerRepository, GameRepository} from "./repositories";
import type {CustomerFilter, CustomerInput, GameInput} from "./schemas";

export class CustomerService {
  constructor(private readonly repository: CustomerRepository) {}
  createCustomer(data: CustomerInput): Customer {
    return this.repository.create(data);
  }
  updateCustomer(id: number, data: CustomerInput): Customer {
    const result = this.repository.update(id, data);
    if (!result) throw new HttpError(404, "Customer not found");
    return result;
  }
  deleteCustomer(id: number): void {
    if (!this.repository.delete(id)) throw new HttpError(404, "Customer not found");
  }
  findCustomers(filter: CustomerFilter): Customer[] {
    return this.repository.findAll(filter);
  }
  getCustomerById(id: number): Customer {
    const result = this.repository.findById(id);
    if (!result) throw new HttpError(404, "Customer not found");
    return result;
  }
}

export class GameService {
  constructor(private readonly repository: GameRepository) {}
  createGame(data: GameInput): Game {
    return this.repository.create(data);
  }
  updateGame(id: number, data: GameInput): Game {
    const result = this.repository.update(id, data);
    if (!result) throw new HttpError(404, "Game not found");
    return result;
  }
}
