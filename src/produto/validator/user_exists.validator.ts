/* eslint-disable prettier/prettier */
import { ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator";
import { UsuarioRepository } from "src/usuario/usuario.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
@ValidatorConstraint({ async: true })
export class UserExistsValidator implements ValidatorConstraintInterface {

    constructor(private userRepository: UsuarioRepository) { }
    
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        const userExists = await this.userRepository.userIdExists(value);
        return !userExists;
    }

}

export const UserExists = (opcoesValidacao: ValidationOptions) => {
    return (obejto: Object, propriedade: string) => {
        registerDecorator({
            target: obejto.constructor,
            propertyName: propriedade,
            options: opcoesValidacao,
            constraints: [],
            validator: UserExistsValidator
        })
    }
}