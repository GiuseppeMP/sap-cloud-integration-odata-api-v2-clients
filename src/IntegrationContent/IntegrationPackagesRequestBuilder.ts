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
import { IntegrationPackages } from './IntegrationPackages';

/**
 * Request builder class for operations supported on the {@link IntegrationPackages} entity.
 */
export class IntegrationPackagesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<IntegrationPackages<T>, T> {
  /**
   * Returns a request builder for querying all `IntegrationPackages` entities.
   * @returns A request builder for creating requests to retrieve all `IntegrationPackages` entities.
   */
  getAll(): GetAllRequestBuilder<IntegrationPackages<T>, T> {
    return new GetAllRequestBuilder<IntegrationPackages<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `IntegrationPackages` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `IntegrationPackages`.
   */
  create(
    entity: IntegrationPackages<T>
  ): CreateRequestBuilder<IntegrationPackages<T>, T> {
    return new CreateRequestBuilder<IntegrationPackages<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `IntegrationPackages` entity based on its keys.
   * @param id Key property. See {@link IntegrationPackages.id}.
   * @returns A request builder for creating requests to retrieve one `IntegrationPackages` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<IntegrationPackages<T>, T> {
    return new GetByKeyRequestBuilder<IntegrationPackages<T>, T>(
      this.entityApi,
      { Id: id }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `IntegrationPackages`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `IntegrationPackages`.
   */
  update(
    entity: IntegrationPackages<T>
  ): UpdateRequestBuilder<IntegrationPackages<T>, T> {
    return new UpdateRequestBuilder<IntegrationPackages<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `IntegrationPackages`.
   * @param id Key property. See {@link IntegrationPackages.id}.
   * @returns A request builder for creating requests that delete an entity of type `IntegrationPackages`.
   */
  delete(id: string): DeleteRequestBuilder<IntegrationPackages<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `IntegrationPackages`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `IntegrationPackages` by taking the entity as a parameter.
   */
  delete(
    entity: IntegrationPackages<T>
  ): DeleteRequestBuilder<IntegrationPackages<T>, T>;
  delete(idOrEntity: any): DeleteRequestBuilder<IntegrationPackages<T>, T> {
    return new DeleteRequestBuilder<IntegrationPackages<T>, T>(
      this.entityApi,
      idOrEntity instanceof IntegrationPackages
        ? idOrEntity
        : { Id: idOrEntity! }
    );
  }
}
