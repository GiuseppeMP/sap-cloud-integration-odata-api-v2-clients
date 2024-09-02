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
import { MessageStoreEntryAttachments } from './MessageStoreEntryAttachments';

/**
 * Request builder class for operations supported on the {@link MessageStoreEntryAttachments} entity.
 */
export class MessageStoreEntryAttachmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MessageStoreEntryAttachments<T>, T> {
  /**
   * Returns a request builder for querying all `MessageStoreEntryAttachments` entities.
   * @returns A request builder for creating requests to retrieve all `MessageStoreEntryAttachments` entities.
   */
  getAll(): GetAllRequestBuilder<MessageStoreEntryAttachments<T>, T> {
    return new GetAllRequestBuilder<MessageStoreEntryAttachments<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MessageStoreEntryAttachments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MessageStoreEntryAttachments`.
   */
  create(
    entity: MessageStoreEntryAttachments<T>
  ): CreateRequestBuilder<MessageStoreEntryAttachments<T>, T> {
    return new CreateRequestBuilder<MessageStoreEntryAttachments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MessageStoreEntryAttachments` entity based on its keys.
   * @param id Key property. See {@link MessageStoreEntryAttachments.id}.
   * @returns A request builder for creating requests to retrieve one `MessageStoreEntryAttachments` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<MessageStoreEntryAttachments<T>, T> {
    return new GetByKeyRequestBuilder<MessageStoreEntryAttachments<T>, T>(
      this.entityApi,
      { Id: id }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MessageStoreEntryAttachments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MessageStoreEntryAttachments`.
   */
  update(
    entity: MessageStoreEntryAttachments<T>
  ): UpdateRequestBuilder<MessageStoreEntryAttachments<T>, T> {
    return new UpdateRequestBuilder<MessageStoreEntryAttachments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MessageStoreEntryAttachments`.
   * @param id Key property. See {@link MessageStoreEntryAttachments.id}.
   * @returns A request builder for creating requests that delete an entity of type `MessageStoreEntryAttachments`.
   */
  delete(id: string): DeleteRequestBuilder<MessageStoreEntryAttachments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MessageStoreEntryAttachments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MessageStoreEntryAttachments` by taking the entity as a parameter.
   */
  delete(
    entity: MessageStoreEntryAttachments<T>
  ): DeleteRequestBuilder<MessageStoreEntryAttachments<T>, T>;
  delete(
    idOrEntity: any
  ): DeleteRequestBuilder<MessageStoreEntryAttachments<T>, T> {
    return new DeleteRequestBuilder<MessageStoreEntryAttachments<T>, T>(
      this.entityApi,
      idOrEntity instanceof MessageStoreEntryAttachments
        ? idOrEntity
        : { Id: idOrEntity! }
    );
  }
}
