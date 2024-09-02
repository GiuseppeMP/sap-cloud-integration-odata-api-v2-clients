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
import { MessageProcessingLogErrorInformations } from './MessageProcessingLogErrorInformations';

/**
 * Request builder class for operations supported on the {@link MessageProcessingLogErrorInformations} entity.
 */
export class MessageProcessingLogErrorInformationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MessageProcessingLogErrorInformations<T>, T> {
  /**
   * Returns a request builder for querying all `MessageProcessingLogErrorInformations` entities.
   * @returns A request builder for creating requests to retrieve all `MessageProcessingLogErrorInformations` entities.
   */
  getAll(): GetAllRequestBuilder<MessageProcessingLogErrorInformations<T>, T> {
    return new GetAllRequestBuilder<
      MessageProcessingLogErrorInformations<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `MessageProcessingLogErrorInformations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MessageProcessingLogErrorInformations`.
   */
  create(
    entity: MessageProcessingLogErrorInformations<T>
  ): CreateRequestBuilder<MessageProcessingLogErrorInformations<T>, T> {
    return new CreateRequestBuilder<
      MessageProcessingLogErrorInformations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `MessageProcessingLogErrorInformations` entity based on its keys.
   * @param messageGuid Key property. See {@link MessageProcessingLogErrorInformations.messageGuid}.
   * @returns A request builder for creating requests to retrieve one `MessageProcessingLogErrorInformations` entity based on its keys.
   */
  getByKey(
    messageGuid: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<MessageProcessingLogErrorInformations<T>, T> {
    return new GetByKeyRequestBuilder<
      MessageProcessingLogErrorInformations<T>,
      T
    >(this.entityApi, { MessageGuid: messageGuid });
  }

  /**
   * Returns a request builder for updating an entity of type `MessageProcessingLogErrorInformations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MessageProcessingLogErrorInformations`.
   */
  update(
    entity: MessageProcessingLogErrorInformations<T>
  ): UpdateRequestBuilder<MessageProcessingLogErrorInformations<T>, T> {
    return new UpdateRequestBuilder<
      MessageProcessingLogErrorInformations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `MessageProcessingLogErrorInformations`.
   * @param messageGuid Key property. See {@link MessageProcessingLogErrorInformations.messageGuid}.
   * @returns A request builder for creating requests that delete an entity of type `MessageProcessingLogErrorInformations`.
   */
  delete(
    messageGuid: string
  ): DeleteRequestBuilder<MessageProcessingLogErrorInformations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MessageProcessingLogErrorInformations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MessageProcessingLogErrorInformations` by taking the entity as a parameter.
   */
  delete(
    entity: MessageProcessingLogErrorInformations<T>
  ): DeleteRequestBuilder<MessageProcessingLogErrorInformations<T>, T>;
  delete(
    messageGuidOrEntity: any
  ): DeleteRequestBuilder<MessageProcessingLogErrorInformations<T>, T> {
    return new DeleteRequestBuilder<
      MessageProcessingLogErrorInformations<T>,
      T
    >(
      this.entityApi,
      messageGuidOrEntity instanceof MessageProcessingLogErrorInformations
        ? messageGuidOrEntity
        : { MessageGuid: messageGuidOrEntity! }
    );
  }
}
