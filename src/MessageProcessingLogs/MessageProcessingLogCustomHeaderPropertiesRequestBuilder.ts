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
import { MessageProcessingLogCustomHeaderProperties } from './MessageProcessingLogCustomHeaderProperties';

/**
 * Request builder class for operations supported on the {@link MessageProcessingLogCustomHeaderProperties} entity.
 */
export class MessageProcessingLogCustomHeaderPropertiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MessageProcessingLogCustomHeaderProperties<T>, T> {
  /**
   * Returns a request builder for querying all `MessageProcessingLogCustomHeaderProperties` entities.
   * @returns A request builder for creating requests to retrieve all `MessageProcessingLogCustomHeaderProperties` entities.
   */
  getAll(): GetAllRequestBuilder<
    MessageProcessingLogCustomHeaderProperties<T>,
    T
  > {
    return new GetAllRequestBuilder<
      MessageProcessingLogCustomHeaderProperties<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `MessageProcessingLogCustomHeaderProperties` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MessageProcessingLogCustomHeaderProperties`.
   */
  create(
    entity: MessageProcessingLogCustomHeaderProperties<T>
  ): CreateRequestBuilder<MessageProcessingLogCustomHeaderProperties<T>, T> {
    return new CreateRequestBuilder<
      MessageProcessingLogCustomHeaderProperties<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `MessageProcessingLogCustomHeaderProperties` entity based on its keys.
   * @param id Key property. See {@link MessageProcessingLogCustomHeaderProperties.id}.
   * @returns A request builder for creating requests to retrieve one `MessageProcessingLogCustomHeaderProperties` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<MessageProcessingLogCustomHeaderProperties<T>, T> {
    return new GetByKeyRequestBuilder<
      MessageProcessingLogCustomHeaderProperties<T>,
      T
    >(this.entityApi, { Id: id });
  }

  /**
   * Returns a request builder for updating an entity of type `MessageProcessingLogCustomHeaderProperties`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MessageProcessingLogCustomHeaderProperties`.
   */
  update(
    entity: MessageProcessingLogCustomHeaderProperties<T>
  ): UpdateRequestBuilder<MessageProcessingLogCustomHeaderProperties<T>, T> {
    return new UpdateRequestBuilder<
      MessageProcessingLogCustomHeaderProperties<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `MessageProcessingLogCustomHeaderProperties`.
   * @param id Key property. See {@link MessageProcessingLogCustomHeaderProperties.id}.
   * @returns A request builder for creating requests that delete an entity of type `MessageProcessingLogCustomHeaderProperties`.
   */
  delete(
    id: string
  ): DeleteRequestBuilder<MessageProcessingLogCustomHeaderProperties<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MessageProcessingLogCustomHeaderProperties`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MessageProcessingLogCustomHeaderProperties` by taking the entity as a parameter.
   */
  delete(
    entity: MessageProcessingLogCustomHeaderProperties<T>
  ): DeleteRequestBuilder<MessageProcessingLogCustomHeaderProperties<T>, T>;
  delete(
    idOrEntity: any
  ): DeleteRequestBuilder<MessageProcessingLogCustomHeaderProperties<T>, T> {
    return new DeleteRequestBuilder<
      MessageProcessingLogCustomHeaderProperties<T>,
      T
    >(
      this.entityApi,
      idOrEntity instanceof MessageProcessingLogCustomHeaderProperties
        ? idOrEntity
        : { Id: idOrEntity! }
    );
  }
}
