/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { Variables } from './Variables';

/**
 * Request builder class for operations supported on the {@link Variables} entity.
 */
export class VariablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Variables<T>, T> {
  /**
   * Returns a request builder for querying all `Variables` entities.
   * @returns A request builder for creating requests to retrieve all `Variables` entities.
   */
  getAll(): GetAllRequestBuilder<Variables<T>, T> {
    return new GetAllRequestBuilder<Variables<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Variables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Variables`.
   */
  create(entity: Variables<T>): CreateRequestBuilder<Variables<T>, T> {
    return new CreateRequestBuilder<Variables<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Variables` entity based on its keys.
   * @param variableName Key property. See {@link Variables.variableName}.
   * @param integrationFlow Key property. See {@link Variables.integrationFlow}.
   * @returns A request builder for creating requests to retrieve one `Variables` entity based on its keys.
   */
  getByKey(
    variableName: DeserializedType<T, 'Edm.String'>,
    integrationFlow: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Variables<T>, T> {
    return new GetByKeyRequestBuilder<Variables<T>, T>(this.entityApi, {
      VariableName: variableName,
      IntegrationFlow: integrationFlow
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Variables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Variables`.
   */
  update(entity: Variables<T>): UpdateRequestBuilder<Variables<T>, T> {
    return new UpdateRequestBuilder<Variables<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Variables`.
   * @param variableName Key property. See {@link Variables.variableName}.
   * @param integrationFlow Key property. See {@link Variables.integrationFlow}.
   * @returns A request builder for creating requests that delete an entity of type `Variables`.
   */
  delete(
    variableName: string,
    integrationFlow: string
  ): DeleteRequestBuilder<Variables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Variables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Variables` by taking the entity as a parameter.
   */
  delete(entity: Variables<T>): DeleteRequestBuilder<Variables<T>, T>;
  delete(
    variableNameOrEntity: any,
    integrationFlow?: string
  ): DeleteRequestBuilder<Variables<T>, T> {
    return new DeleteRequestBuilder<Variables<T>, T>(
      this.entityApi,
      variableNameOrEntity instanceof Variables
        ? variableNameOrEntity
        : {
            VariableName: variableNameOrEntity!,
            IntegrationFlow: integrationFlow!
          }
    );
  }
}
