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
import { MessageStoreEntryAttachmentProperties } from './MessageStoreEntryAttachmentProperties';

/**
 * Request builder class for operations supported on the {@link MessageStoreEntryAttachmentProperties} entity.
 */
export class MessageStoreEntryAttachmentPropertiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MessageStoreEntryAttachmentProperties<T>, T> {
  /**
   * Returns a request builder for querying all `MessageStoreEntryAttachmentProperties` entities.
   * @returns A request builder for creating requests to retrieve all `MessageStoreEntryAttachmentProperties` entities.
   */
  getAll(): GetAllRequestBuilder<MessageStoreEntryAttachmentProperties<T>, T> {
    return new GetAllRequestBuilder<
      MessageStoreEntryAttachmentProperties<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `MessageStoreEntryAttachmentProperties` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MessageStoreEntryAttachmentProperties`.
   */
  create(
    entity: MessageStoreEntryAttachmentProperties<T>
  ): CreateRequestBuilder<MessageStoreEntryAttachmentProperties<T>, T> {
    return new CreateRequestBuilder<
      MessageStoreEntryAttachmentProperties<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `MessageStoreEntryAttachmentProperties` entity based on its keys.
   * @param attachmentId Key property. See {@link MessageStoreEntryAttachmentProperties.attachmentId}.
   * @param name Key property. See {@link MessageStoreEntryAttachmentProperties.name}.
   * @returns A request builder for creating requests to retrieve one `MessageStoreEntryAttachmentProperties` entity based on its keys.
   */
  getByKey(
    attachmentId: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<MessageStoreEntryAttachmentProperties<T>, T> {
    return new GetByKeyRequestBuilder<
      MessageStoreEntryAttachmentProperties<T>,
      T
    >(this.entityApi, {
      AttachmentId: attachmentId,
      Name: name
    });
  }

  /**
   * Returns a request builder for updating an entity of type `MessageStoreEntryAttachmentProperties`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MessageStoreEntryAttachmentProperties`.
   */
  update(
    entity: MessageStoreEntryAttachmentProperties<T>
  ): UpdateRequestBuilder<MessageStoreEntryAttachmentProperties<T>, T> {
    return new UpdateRequestBuilder<
      MessageStoreEntryAttachmentProperties<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `MessageStoreEntryAttachmentProperties`.
   * @param attachmentId Key property. See {@link MessageStoreEntryAttachmentProperties.attachmentId}.
   * @param name Key property. See {@link MessageStoreEntryAttachmentProperties.name}.
   * @returns A request builder for creating requests that delete an entity of type `MessageStoreEntryAttachmentProperties`.
   */
  delete(
    attachmentId: string,
    name: string
  ): DeleteRequestBuilder<MessageStoreEntryAttachmentProperties<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MessageStoreEntryAttachmentProperties`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MessageStoreEntryAttachmentProperties` by taking the entity as a parameter.
   */
  delete(
    entity: MessageStoreEntryAttachmentProperties<T>
  ): DeleteRequestBuilder<MessageStoreEntryAttachmentProperties<T>, T>;
  delete(
    attachmentIdOrEntity: any,
    name?: string
  ): DeleteRequestBuilder<MessageStoreEntryAttachmentProperties<T>, T> {
    return new DeleteRequestBuilder<
      MessageStoreEntryAttachmentProperties<T>,
      T
    >(
      this.entityApi,
      attachmentIdOrEntity instanceof MessageStoreEntryAttachmentProperties
        ? attachmentIdOrEntity
        : {
            AttachmentId: attachmentIdOrEntity!,
            Name: name!
          }
    );
  }
}
