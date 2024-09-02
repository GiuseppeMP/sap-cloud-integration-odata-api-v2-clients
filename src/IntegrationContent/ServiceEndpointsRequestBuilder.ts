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
import { ServiceEndpoints } from './ServiceEndpoints';

/**
 * Request builder class for operations supported on the {@link ServiceEndpoints} entity.
 */
export class ServiceEndpointsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ServiceEndpoints<T>, T> {
  /**
   * Returns a request builder for querying all `ServiceEndpoints` entities.
   * @returns A request builder for creating requests to retrieve all `ServiceEndpoints` entities.
   */
  getAll(): GetAllRequestBuilder<ServiceEndpoints<T>, T> {
    return new GetAllRequestBuilder<ServiceEndpoints<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ServiceEndpoints` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ServiceEndpoints`.
   */
  create(
    entity: ServiceEndpoints<T>
  ): CreateRequestBuilder<ServiceEndpoints<T>, T> {
    return new CreateRequestBuilder<ServiceEndpoints<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ServiceEndpoints` entity based on its keys.
   * @param id Key property. See {@link ServiceEndpoints.id}.
   * @returns A request builder for creating requests to retrieve one `ServiceEndpoints` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ServiceEndpoints<T>, T> {
    return new GetByKeyRequestBuilder<ServiceEndpoints<T>, T>(this.entityApi, {
      Id: id
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ServiceEndpoints`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ServiceEndpoints`.
   */
  update(
    entity: ServiceEndpoints<T>
  ): UpdateRequestBuilder<ServiceEndpoints<T>, T> {
    return new UpdateRequestBuilder<ServiceEndpoints<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ServiceEndpoints`.
   * @param id Key property. See {@link ServiceEndpoints.id}.
   * @returns A request builder for creating requests that delete an entity of type `ServiceEndpoints`.
   */
  delete(id: string): DeleteRequestBuilder<ServiceEndpoints<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ServiceEndpoints`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ServiceEndpoints` by taking the entity as a parameter.
   */
  delete(
    entity: ServiceEndpoints<T>
  ): DeleteRequestBuilder<ServiceEndpoints<T>, T>;
  delete(idOrEntity: any): DeleteRequestBuilder<ServiceEndpoints<T>, T> {
    return new DeleteRequestBuilder<ServiceEndpoints<T>, T>(
      this.entityApi,
      idOrEntity instanceof ServiceEndpoints ? idOrEntity : { Id: idOrEntity! }
    );
  }
}
