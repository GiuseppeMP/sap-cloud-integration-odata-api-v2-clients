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
import { MessageStoreEntries } from './MessageStoreEntries';

/**
 * Request builder class for operations supported on the {@link MessageStoreEntries} entity.
 */
export class MessageStoreEntriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MessageStoreEntries<T>, T> {
  /**
   * Returns a request builder for querying all `MessageStoreEntries` entities.
   * @returns A request builder for creating requests to retrieve all `MessageStoreEntries` entities.
   */
  getAll(): GetAllRequestBuilder<MessageStoreEntries<T>, T> {
    return new GetAllRequestBuilder<MessageStoreEntries<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `MessageStoreEntries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MessageStoreEntries`.
   */
  create(
    entity: MessageStoreEntries<T>
  ): CreateRequestBuilder<MessageStoreEntries<T>, T> {
    return new CreateRequestBuilder<MessageStoreEntries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MessageStoreEntries` entity based on its keys.
   * @param id Key property. See {@link MessageStoreEntries.id}.
   * @returns A request builder for creating requests to retrieve one `MessageStoreEntries` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<MessageStoreEntries<T>, T> {
    return new GetByKeyRequestBuilder<MessageStoreEntries<T>, T>(
      this.entityApi,
      { Id: id }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MessageStoreEntries`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MessageStoreEntries`.
   */
  update(
    entity: MessageStoreEntries<T>
  ): UpdateRequestBuilder<MessageStoreEntries<T>, T> {
    return new UpdateRequestBuilder<MessageStoreEntries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MessageStoreEntries`.
   * @param id Key property. See {@link MessageStoreEntries.id}.
   * @returns A request builder for creating requests that delete an entity of type `MessageStoreEntries`.
   */
  delete(id: string): DeleteRequestBuilder<MessageStoreEntries<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MessageStoreEntries`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MessageStoreEntries` by taking the entity as a parameter.
   */
  delete(
    entity: MessageStoreEntries<T>
  ): DeleteRequestBuilder<MessageStoreEntries<T>, T>;
  delete(idOrEntity: any): DeleteRequestBuilder<MessageStoreEntries<T>, T> {
    return new DeleteRequestBuilder<MessageStoreEntries<T>, T>(
      this.entityApi,
      idOrEntity instanceof MessageStoreEntries
        ? idOrEntity
        : { Id: idOrEntity! }
    );
  }
}
