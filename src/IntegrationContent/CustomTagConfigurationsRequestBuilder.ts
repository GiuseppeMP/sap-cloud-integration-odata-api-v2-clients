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
import { CustomTagConfigurations } from './CustomTagConfigurations';

/**
 * Request builder class for operations supported on the {@link CustomTagConfigurations} entity.
 */
export class CustomTagConfigurationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomTagConfigurations<T>, T> {
  /**
   * Returns a request builder for querying all `CustomTagConfigurations` entities.
   * @returns A request builder for creating requests to retrieve all `CustomTagConfigurations` entities.
   */
  getAll(): GetAllRequestBuilder<CustomTagConfigurations<T>, T> {
    return new GetAllRequestBuilder<CustomTagConfigurations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CustomTagConfigurations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomTagConfigurations`.
   */
  create(
    entity: CustomTagConfigurations<T>
  ): CreateRequestBuilder<CustomTagConfigurations<T>, T> {
    return new CreateRequestBuilder<CustomTagConfigurations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustomTagConfigurations` entity based on its keys.
   * @param id Key property. See {@link CustomTagConfigurations.id}.
   * @returns A request builder for creating requests to retrieve one `CustomTagConfigurations` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustomTagConfigurations<T>, T> {
    return new GetByKeyRequestBuilder<CustomTagConfigurations<T>, T>(
      this.entityApi,
      { Id: id }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustomTagConfigurations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomTagConfigurations`.
   */
  update(
    entity: CustomTagConfigurations<T>
  ): UpdateRequestBuilder<CustomTagConfigurations<T>, T> {
    return new UpdateRequestBuilder<CustomTagConfigurations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomTagConfigurations`.
   * @param id Key property. See {@link CustomTagConfigurations.id}.
   * @returns A request builder for creating requests that delete an entity of type `CustomTagConfigurations`.
   */
  delete(id: string): DeleteRequestBuilder<CustomTagConfigurations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomTagConfigurations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomTagConfigurations` by taking the entity as a parameter.
   */
  delete(
    entity: CustomTagConfigurations<T>
  ): DeleteRequestBuilder<CustomTagConfigurations<T>, T>;
  delete(idOrEntity: any): DeleteRequestBuilder<CustomTagConfigurations<T>, T> {
    return new DeleteRequestBuilder<CustomTagConfigurations<T>, T>(
      this.entityApi,
      idOrEntity instanceof CustomTagConfigurations
        ? idOrEntity
        : { Id: idOrEntity! }
    );
  }
}
