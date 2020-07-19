interface Validator {
    validate(request: string, type: string): boolean
    next(handler: Validator): Validator
}

abstract class AbstractValidator implements Validator {
    private nextValidator: Validator

    public next(validator: Validator): Validator {
        this.nextValidator = validator
        return validator
    }

    public validate(request: string, type: string): boolean {
        if (this.nextValidator) {
            return this.nextValidator.validate(request, type)
        }

        return null
    }
}

class PasswordValidator extends AbstractValidator {
    validate(request: string, type: string): boolean {
        if (type === 'password') {
            return request.length >= 8
        }

        return super.validate(request, type)
    }
}

class NameValidator extends AbstractValidator {
    validate(request: string, type: string): boolean {
        if (type === 'username') {
            return /^([a-zA-Z'\-\s]+)$/.test(request)
        }

        return super.validate(request, type)
    }
}

export default {
    PasswordValidator,
    NameValidator,
    AbstractValidator,
}
