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
import { MessageProcessingLogAdapterAttributes } from './MessageProcessingLogAdapterAttributes';

/**
 * Request builder class for operations supported on the {@link MessageProcessingLogAdapterAttributes} entity.
 */
export class MessageProcessingLogAdapterAttributesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MessageProcessingLogAdapterAttributes<T>, T> {
  /**
   * Returns a request builder for querying all `MessageProcessingLogAdapterAttributes` entities.
   * @returns A request builder for creating requests to retrieve all `MessageProcessingLogAdapterAttributes` entities.
   */
  getAll(): GetAllRequestBuilder<MessageProcessingLogAdapterAttributes<T>, T> {
    return new GetAllRequestBuilder<
      MessageProcessingLogAdapterAttributes<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `MessageProcessingLogAdapterAttributes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MessageProcessingLogAdapterAttributes`.
   */
  create(
    entity: MessageProcessingLogAdapterAttributes<T>
  ): CreateRequestBuilder<MessageProcessingLogAdapterAttributes<T>, T> {
    return new CreateRequestBuilder<
      MessageProcessingLogAdapterAttributes<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `MessageProcessingLogAdapterAttributes` entity based on its keys.
   * @param id Key property. See {@link MessageProcessingLogAdapterAttributes.id}.
   * @returns A request builder for creating requests to retrieve one `MessageProcessingLogAdapterAttributes` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<MessageProcessingLogAdapterAttributes<T>, T> {
    return new GetByKeyRequestBuilder<
      MessageProcessingLogAdapterAttributes<T>,
      T
    >(this.entityApi, { Id: id });
  }

  /**
   * Returns a request builder for updating an entity of type `MessageProcessingLogAdapterAttributes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MessageProcessingLogAdapterAttributes`.
   */
  update(
    entity: MessageProcessingLogAdapterAttributes<T>
  ): UpdateRequestBuilder<MessageProcessingLogAdapterAttributes<T>, T> {
    return new UpdateRequestBuilder<
      MessageProcessingLogAdapterAttributes<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `MessageProcessingLogAdapterAttributes`.
   * @param id Key property. See {@link MessageProcessingLogAdapterAttributes.id}.
   * @returns A request builder for creating requests that delete an entity of type `MessageProcessingLogAdapterAttributes`.
   */
  delete(
    id: string
  ): DeleteRequestBuilder<MessageProcessingLogAdapterAttributes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MessageProcessingLogAdapterAttributes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MessageProcessingLogAdapterAttributes` by taking the entity as a parameter.
   */
  delete(
    entity: MessageProcessingLogAdapterAttributes<T>
  ): DeleteRequestBuilder<MessageProcessingLogAdapterAttributes<T>, T>;
  delete(
    idOrEntity: any
  ): DeleteRequestBuilder<MessageProcessingLogAdapterAttributes<T>, T> {
    return new DeleteRequestBuilder<
      MessageProcessingLogAdapterAttributes<T>,
      T
    >(
      this.entityApi,
      idOrEntity instanceof MessageProcessingLogAdapterAttributes
        ? idOrEntity
        : { Id: idOrEntity! }
    );
  }
}
