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
import { Configurations } from './Configurations';

/**
 * Request builder class for operations supported on the {@link Configurations} entity.
 */
export class ConfigurationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Configurations<T>, T> {
  /**
   * Returns a request builder for querying all `Configurations` entities.
   * @returns A request builder for creating requests to retrieve all `Configurations` entities.
   */
  getAll(): GetAllRequestBuilder<Configurations<T>, T> {
    return new GetAllRequestBuilder<Configurations<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Configurations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Configurations`.
   */
  create(
    entity: Configurations<T>
  ): CreateRequestBuilder<Configurations<T>, T> {
    return new CreateRequestBuilder<Configurations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `Configurations` entity based on its keys.
   * @param parameterKey Key property. See {@link Configurations.parameterKey}.
   * @returns A request builder for creating requests to retrieve one `Configurations` entity based on its keys.
   */
  getByKey(
    parameterKey: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Configurations<T>, T> {
    return new GetByKeyRequestBuilder<Configurations<T>, T>(this.entityApi, {
      ParameterKey: parameterKey
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Configurations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Configurations`.
   */
  update(
    entity: Configurations<T>
  ): UpdateRequestBuilder<Configurations<T>, T> {
    return new UpdateRequestBuilder<Configurations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `Configurations`.
   * @param parameterKey Key property. See {@link Configurations.parameterKey}.
   * @returns A request builder for creating requests that delete an entity of type `Configurations`.
   */
  delete(parameterKey: string): DeleteRequestBuilder<Configurations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Configurations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Configurations` by taking the entity as a parameter.
   */
  delete(entity: Configurations<T>): DeleteRequestBuilder<Configurations<T>, T>;
  delete(
    parameterKeyOrEntity: any
  ): DeleteRequestBuilder<Configurations<T>, T> {
    return new DeleteRequestBuilder<Configurations<T>, T>(
      this.entityApi,
      parameterKeyOrEntity instanceof Configurations
        ? parameterKeyOrEntity
        : { ParameterKey: parameterKeyOrEntity! }
    );
  }
}
