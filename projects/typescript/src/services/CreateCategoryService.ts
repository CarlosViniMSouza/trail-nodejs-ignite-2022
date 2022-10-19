/*
    [x] - Definir tipo de retorno
    [x] - Alterar o retorno de error
    [x] - Acessar o repositorio
    [x] - Retorne algo na rota
*/

import { CategoriesRepository } from "../repositories/CategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryService {
    constructor(private categoriesRepository: CategoriesRepository) {

    }

    execute({ name, description }: IRequest): void {
        const categoriesRepository = new CategoriesRepository();
        const categoryAlreadyExists = this.categoriesRepository.findCategoryByName(name);

        if (categoryAlreadyExists) {
            throw new Error("Category Already Exists");
        }

        this.categoriesRepository.create({ name, description })
    }
}

export { CreateCategoryService };