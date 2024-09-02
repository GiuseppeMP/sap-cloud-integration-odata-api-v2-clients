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
import { MessageStoreEntryProperties } from './MessageStoreEntryProperties';

/**
 * Request builder class for operations supported on the {@link MessageStoreEntryProperties} entity.
 */
export class MessageStoreEntryPropertiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MessageStoreEntryProperties<T>, T> {
  /**
   * Returns a request builder for querying all `MessageStoreEntryProperties` entities.
   * @returns A request builder for creating requests to retrieve all `MessageStoreEntryProperties` entities.
   */
  getAll(): GetAllRequestBuilder<MessageStoreEntryProperties<T>, T> {
    return new GetAllRequestBuilder<MessageStoreEntryProperties<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MessageStoreEntryProperties` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MessageStoreEntryProperties`.
   */
  create(
    entity: MessageStoreEntryProperties<T>
  ): CreateRequestBuilder<MessageStoreEntryProperties<T>, T> {
    return new CreateRequestBuilder<MessageStoreEntryProperties<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MessageStoreEntryProperties` entity based on its keys.
   * @param messageId Key property. See {@link MessageStoreEntryProperties.messageId}.
   * @param name Key property. See {@link MessageStoreEntryProperties.name}.
   * @returns A request builder for creating requests to retrieve one `MessageStoreEntryProperties` entity based on its keys.
   */
  getByKey(
    messageId: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<MessageStoreEntryProperties<T>, T> {
    return new GetByKeyRequestBuilder<MessageStoreEntryProperties<T>, T>(
      this.entityApi,
      {
        MessageId: messageId,
        Name: name
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MessageStoreEntryProperties`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MessageStoreEntryProperties`.
   */
  update(
    entity: MessageStoreEntryProperties<T>
  ): UpdateRequestBuilder<MessageStoreEntryProperties<T>, T> {
    return new UpdateRequestBuilder<MessageStoreEntryProperties<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MessageStoreEntryProperties`.
   * @param messageId Key property. See {@link MessageStoreEntryProperties.messageId}.
   * @param name Key property. See {@link MessageStoreEntryProperties.name}.
   * @returns A request builder for creating requests that delete an entity of type `MessageStoreEntryProperties`.
   */
  delete(
    messageId: string,
    name: string
  ): DeleteRequestBuilder<MessageStoreEntryProperties<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MessageStoreEntryProperties`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MessageStoreEntryProperties` by taking the entity as a parameter.
   */
  delete(
    entity: MessageStoreEntryProperties<T>
  ): DeleteRequestBuilder<MessageStoreEntryProperties<T>, T>;
  delete(
    messageIdOrEntity: any,
    name?: string
  ): DeleteRequestBuilder<MessageStoreEntryProperties<T>, T> {
    return new DeleteRequestBuilder<MessageStoreEntryProperties<T>, T>(
      this.entityApi,
      messageIdOrEntity instanceof MessageStoreEntryProperties
        ? messageIdOrEntity
        : {
            MessageId: messageIdOrEntity!,
            Name: name!
          }
    );
  }
}
