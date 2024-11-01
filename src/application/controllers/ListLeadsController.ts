import { IController, IRequest, IResponse } from "../interfaces/IController";

export class ListLeadsController implements IController {
  async handle(request: IRequest): Promise<IResponse> {
    return {
      statusCode: 200,
      body: {
        leads: [
          {
            id: 1, name: "John Smith",
          },
          {
            id: 2, name: "Jane Doe",
          },
          {
            id: 3, name: "Alice",
          }
        ],
      }
    }
  }

};
