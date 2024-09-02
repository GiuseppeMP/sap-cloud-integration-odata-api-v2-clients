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
import { MessageProcessingLogs } from './MessageProcessingLogs';

/**
 * Request builder class for operations supported on the {@link MessageProcessingLogs} entity.
 */
export class MessageProcessingLogsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MessageProcessingLogs<T>, T> {
  /**
   * Returns a request builder for querying all `MessageProcessingLogs` entities.
   * @returns A request builder for creating requests to retrieve all `MessageProcessingLogs` entities.
   */
  getAll(): GetAllRequestBuilder<MessageProcessingLogs<T>, T> {
    return new GetAllRequestBuilder<MessageProcessingLogs<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MessageProcessingLogs` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MessageProcessingLogs`.
   */
  create(
    entity: MessageProcessingLogs<T>
  ): CreateRequestBuilder<MessageProcessingLogs<T>, T> {
    return new CreateRequestBuilder<MessageProcessingLogs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MessageProcessingLogs` entity based on its keys.
   * @param messageGuid Key property. See {@link MessageProcessingLogs.messageGuid}.
   * @returns A request builder for creating requests to retrieve one `MessageProcessingLogs` entity based on its keys.
   */
  getByKey(
    messageGuid: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<MessageProcessingLogs<T>, T> {
    return new GetByKeyRequestBuilder<MessageProcessingLogs<T>, T>(
      this.entityApi,
      { MessageGuid: messageGuid }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MessageProcessingLogs`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MessageProcessingLogs`.
   */
  update(
    entity: MessageProcessingLogs<T>
  ): UpdateRequestBuilder<MessageProcessingLogs<T>, T> {
    return new UpdateRequestBuilder<MessageProcessingLogs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MessageProcessingLogs`.
   * @param messageGuid Key property. See {@link MessageProcessingLogs.messageGuid}.
   * @returns A request builder for creating requests that delete an entity of type `MessageProcessingLogs`.
   */
  delete(
    messageGuid: string
  ): DeleteRequestBuilder<MessageProcessingLogs<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MessageProcessingLogs`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MessageProcessingLogs` by taking the entity as a parameter.
   */
  delete(
    entity: MessageProcessingLogs<T>
  ): DeleteRequestBuilder<MessageProcessingLogs<T>, T>;
  delete(
    messageGuidOrEntity: any
  ): DeleteRequestBuilder<MessageProcessingLogs<T>, T> {
    return new DeleteRequestBuilder<MessageProcessingLogs<T>, T>(
      this.entityApi,
      messageGuidOrEntity instanceof MessageProcessingLogs
        ? messageGuidOrEntity
        : { MessageGuid: messageGuidOrEntity! }
    );
  }
}
