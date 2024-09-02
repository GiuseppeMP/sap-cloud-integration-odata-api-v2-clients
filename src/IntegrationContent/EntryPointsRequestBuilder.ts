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
import { EntryPoints } from './EntryPoints';

/**
 * Request builder class for operations supported on the {@link EntryPoints} entity.
 */
export class EntryPointsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EntryPoints<T>, T> {
  /**
   * Returns a request builder for querying all `EntryPoints` entities.
   * @returns A request builder for creating requests to retrieve all `EntryPoints` entities.
   */
  getAll(): GetAllRequestBuilder<EntryPoints<T>, T> {
    return new GetAllRequestBuilder<EntryPoints<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EntryPoints` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EntryPoints`.
   */
  create(entity: EntryPoints<T>): CreateRequestBuilder<EntryPoints<T>, T> {
    return new CreateRequestBuilder<EntryPoints<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `EntryPoints` entity based on its keys.
   * @param url Key property. See {@link EntryPoints.url}.
   * @returns A request builder for creating requests to retrieve one `EntryPoints` entity based on its keys.
   */
  getByKey(
    url: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EntryPoints<T>, T> {
    return new GetByKeyRequestBuilder<EntryPoints<T>, T>(this.entityApi, {
      Url: url
    });
  }

  /**
   * Returns a request builder for updating an entity of type `EntryPoints`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EntryPoints`.
   */
  update(entity: EntryPoints<T>): UpdateRequestBuilder<EntryPoints<T>, T> {
    return new UpdateRequestBuilder<EntryPoints<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EntryPoints`.
   * @param url Key property. See {@link EntryPoints.url}.
   * @returns A request builder for creating requests that delete an entity of type `EntryPoints`.
   */
  delete(url: string): DeleteRequestBuilder<EntryPoints<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EntryPoints`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EntryPoints` by taking the entity as a parameter.
   */
  delete(entity: EntryPoints<T>): DeleteRequestBuilder<EntryPoints<T>, T>;
  delete(urlOrEntity: any): DeleteRequestBuilder<EntryPoints<T>, T> {
    return new DeleteRequestBuilder<EntryPoints<T>, T>(
      this.entityApi,
      urlOrEntity instanceof EntryPoints ? urlOrEntity : { Url: urlOrEntity! }
    );
  }
}
