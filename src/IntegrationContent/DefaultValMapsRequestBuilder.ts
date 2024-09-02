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
import { DefaultValMaps } from './DefaultValMaps';

/**
 * Request builder class for operations supported on the {@link DefaultValMaps} entity.
 */
export class DefaultValMapsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DefaultValMaps<T>, T> {
  /**
   * Returns a request builder for querying all `DefaultValMaps` entities.
   * @returns A request builder for creating requests to retrieve all `DefaultValMaps` entities.
   */
  getAll(): GetAllRequestBuilder<DefaultValMaps<T>, T> {
    return new GetAllRequestBuilder<DefaultValMaps<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DefaultValMaps` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DefaultValMaps`.
   */
  create(
    entity: DefaultValMaps<T>
  ): CreateRequestBuilder<DefaultValMaps<T>, T> {
    return new CreateRequestBuilder<DefaultValMaps<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DefaultValMaps` entity based on its keys.
   * @param id Key property. See {@link DefaultValMaps.id}.
   * @returns A request builder for creating requests to retrieve one `DefaultValMaps` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DefaultValMaps<T>, T> {
    return new GetByKeyRequestBuilder<DefaultValMaps<T>, T>(this.entityApi, {
      Id: id
    });
  }

  /**
   * Returns a request builder for updating an entity of type `DefaultValMaps`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DefaultValMaps`.
   */
  update(
    entity: DefaultValMaps<T>
  ): UpdateRequestBuilder<DefaultValMaps<T>, T> {
    return new UpdateRequestBuilder<DefaultValMaps<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DefaultValMaps`.
   * @param id Key property. See {@link DefaultValMaps.id}.
   * @returns A request builder for creating requests that delete an entity of type `DefaultValMaps`.
   */
  delete(id: string): DeleteRequestBuilder<DefaultValMaps<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DefaultValMaps`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DefaultValMaps` by taking the entity as a parameter.
   */
  delete(entity: DefaultValMaps<T>): DeleteRequestBuilder<DefaultValMaps<T>, T>;
  delete(idOrEntity: any): DeleteRequestBuilder<DefaultValMaps<T>, T> {
    return new DeleteRequestBuilder<DefaultValMaps<T>, T>(
      this.entityApi,
      idOrEntity instanceof DefaultValMaps ? idOrEntity : { Id: idOrEntity! }
    );
  }
}
