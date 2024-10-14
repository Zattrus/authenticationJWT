import { z, ZodError } from "zod";
import { InvalidCredentials } from "../errors/InvalidCredentials";
import { IController, IRequest, IResponse } from "../interfaces/IController";
import { SingnInUseCase } from "../useCases/SingnInUseCase";

const schema = z.object({
  email: z.string().email().min(1),
  password: z.string().min(8),
});


export class SignInController implements IController {
  constructor(private readonly signInUseCase: SingnInUseCase){}

  async handle({body}: IRequest): Promise<IResponse> {
    try {
      const {email, password} = schema.parse(body)

      const { accessToken } = await this.signInUseCase.execute({email, password})

      return {
        statusCode: 200,
        body: {
          accessToken,
        }
      }
    }catch (error){
      if(error instanceof ZodError) {
        return {
          statusCode: 400,
          body: {
            message: error.issues,
          }
        }
      }

      if(error instanceof InvalidCredentials) {
        return {
          statusCode: 401,
          body: {
            error: 'Invalid credentials.'
          }
      };
    }
      throw error;
    }
  }
}