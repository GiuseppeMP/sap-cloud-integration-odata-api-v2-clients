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
import { ValMaps } from './ValMaps';

/**
 * Request builder class for operations supported on the {@link ValMaps} entity.
 */
export class ValMapsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ValMaps<T>, T> {
  /**
   * Returns a request builder for querying all `ValMaps` entities.
   * @returns A request builder for creating requests to retrieve all `ValMaps` entities.
   */
  getAll(): GetAllRequestBuilder<ValMaps<T>, T> {
    return new GetAllRequestBuilder<ValMaps<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ValMaps` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ValMaps`.
   */
  create(entity: ValMaps<T>): CreateRequestBuilder<ValMaps<T>, T> {
    return new CreateRequestBuilder<ValMaps<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ValMaps` entity based on its keys.
   * @param id Key property. See {@link ValMaps.id}.
   * @returns A request builder for creating requests to retrieve one `ValMaps` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ValMaps<T>, T> {
    return new GetByKeyRequestBuilder<ValMaps<T>, T>(this.entityApi, {
      Id: id
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ValMaps`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ValMaps`.
   */
  update(entity: ValMaps<T>): UpdateRequestBuilder<ValMaps<T>, T> {
    return new UpdateRequestBuilder<ValMaps<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ValMaps`.
   * @param id Key property. See {@link ValMaps.id}.
   * @returns A request builder for creating requests that delete an entity of type `ValMaps`.
   */
  delete(id: string): DeleteRequestBuilder<ValMaps<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ValMaps`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ValMaps` by taking the entity as a parameter.
   */
  delete(entity: ValMaps<T>): DeleteRequestBuilder<ValMaps<T>, T>;
  delete(idOrEntity: any): DeleteRequestBuilder<ValMaps<T>, T> {
    return new DeleteRequestBuilder<ValMaps<T>, T>(
      this.entityApi,
      idOrEntity instanceof ValMaps ? idOrEntity : { Id: idOrEntity! }
    );
  }
}
