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
import { MessageProcessingLogAttachments } from './MessageProcessingLogAttachments';

/**
 * Request builder class for operations supported on the {@link MessageProcessingLogAttachments} entity.
 */
export class MessageProcessingLogAttachmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MessageProcessingLogAttachments<T>, T> {
  /**
   * Returns a request builder for querying all `MessageProcessingLogAttachments` entities.
   * @returns A request builder for creating requests to retrieve all `MessageProcessingLogAttachments` entities.
   */
  getAll(): GetAllRequestBuilder<MessageProcessingLogAttachments<T>, T> {
    return new GetAllRequestBuilder<MessageProcessingLogAttachments<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MessageProcessingLogAttachments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MessageProcessingLogAttachments`.
   */
  create(
    entity: MessageProcessingLogAttachments<T>
  ): CreateRequestBuilder<MessageProcessingLogAttachments<T>, T> {
    return new CreateRequestBuilder<MessageProcessingLogAttachments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MessageProcessingLogAttachments` entity based on its keys.
   * @param id Key property. See {@link MessageProcessingLogAttachments.id}.
   * @returns A request builder for creating requests to retrieve one `MessageProcessingLogAttachments` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<MessageProcessingLogAttachments<T>, T> {
    return new GetByKeyRequestBuilder<MessageProcessingLogAttachments<T>, T>(
      this.entityApi,
      { Id: id }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MessageProcessingLogAttachments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MessageProcessingLogAttachments`.
   */
  update(
    entity: MessageProcessingLogAttachments<T>
  ): UpdateRequestBuilder<MessageProcessingLogAttachments<T>, T> {
    return new UpdateRequestBuilder<MessageProcessingLogAttachments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MessageProcessingLogAttachments`.
   * @param id Key property. See {@link MessageProcessingLogAttachments.id}.
   * @returns A request builder for creating requests that delete an entity of type `MessageProcessingLogAttachments`.
   */
  delete(
    id: string
  ): DeleteRequestBuilder<MessageProcessingLogAttachments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MessageProcessingLogAttachments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MessageProcessingLogAttachments` by taking the entity as a parameter.
   */
  delete(
    entity: MessageProcessingLogAttachments<T>
  ): DeleteRequestBuilder<MessageProcessingLogAttachments<T>, T>;
  delete(
    idOrEntity: any
  ): DeleteRequestBuilder<MessageProcessingLogAttachments<T>, T> {
    return new DeleteRequestBuilder<MessageProcessingLogAttachments<T>, T>(
      this.entityApi,
      idOrEntity instanceof MessageProcessingLogAttachments
        ? idOrEntity
        : { Id: idOrEntity! }
    );
  }
}
