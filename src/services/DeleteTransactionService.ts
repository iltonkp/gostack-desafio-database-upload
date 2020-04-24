import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';

import TransactionsRepository from '../repositories/TransactionsRepository';

interface Request {
  id: string;
}

class DeleteTransactionService {
  public async execute({ id }: Request): Promise<void> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);
    const repositoriesExistes = await transactionsRepository.findOne(id);

    if (!repositoriesExistes) {
      throw new AppError('Repository dos not exists');
    }

    await transactionsRepository.delete(id);
  }
}

export default DeleteTransactionService;
