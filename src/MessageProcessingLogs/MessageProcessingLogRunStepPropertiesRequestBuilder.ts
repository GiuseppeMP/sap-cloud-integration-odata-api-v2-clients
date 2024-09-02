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
import { MessageProcessingLogRunStepProperties } from './MessageProcessingLogRunStepProperties';

/**
 * Request builder class for operations supported on the {@link MessageProcessingLogRunStepProperties} entity.
 */
export class MessageProcessingLogRunStepPropertiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MessageProcessingLogRunStepProperties<T>, T> {
  /**
   * Returns a request builder for querying all `MessageProcessingLogRunStepProperties` entities.
   * @returns A request builder for creating requests to retrieve all `MessageProcessingLogRunStepProperties` entities.
   */
  getAll(): GetAllRequestBuilder<MessageProcessingLogRunStepProperties<T>, T> {
    return new GetAllRequestBuilder<
      MessageProcessingLogRunStepProperties<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `MessageProcessingLogRunStepProperties` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MessageProcessingLogRunStepProperties`.
   */
  create(
    entity: MessageProcessingLogRunStepProperties<T>
  ): CreateRequestBuilder<MessageProcessingLogRunStepProperties<T>, T> {
    return new CreateRequestBuilder<
      MessageProcessingLogRunStepProperties<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `MessageProcessingLogRunStepProperties` entity based on its keys.
   * @param runId Key property. See {@link MessageProcessingLogRunStepProperties.runId}.
   * @param childCount Key property. See {@link MessageProcessingLogRunStepProperties.childCount}.
   * @param name Key property. See {@link MessageProcessingLogRunStepProperties.name}.
   * @returns A request builder for creating requests to retrieve one `MessageProcessingLogRunStepProperties` entity based on its keys.
   */
  getByKey(
    runId: DeserializedType<T, 'Edm.String'>,
    childCount: DeserializedType<T, 'Edm.Int32'>,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<MessageProcessingLogRunStepProperties<T>, T> {
    return new GetByKeyRequestBuilder<
      MessageProcessingLogRunStepProperties<T>,
      T
    >(this.entityApi, {
      RunId: runId,
      ChildCount: childCount,
      Name: name
    });
  }

  /**
   * Returns a request builder for updating an entity of type `MessageProcessingLogRunStepProperties`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MessageProcessingLogRunStepProperties`.
   */
  update(
    entity: MessageProcessingLogRunStepProperties<T>
  ): UpdateRequestBuilder<MessageProcessingLogRunStepProperties<T>, T> {
    return new UpdateRequestBuilder<
      MessageProcessingLogRunStepProperties<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `MessageProcessingLogRunStepProperties`.
   * @param runId Key property. See {@link MessageProcessingLogRunStepProperties.runId}.
   * @param childCount Key property. See {@link MessageProcessingLogRunStepProperties.childCount}.
   * @param name Key property. See {@link MessageProcessingLogRunStepProperties.name}.
   * @returns A request builder for creating requests that delete an entity of type `MessageProcessingLogRunStepProperties`.
   */
  delete(
    runId: string,
    childCount: number,
    name: string
  ): DeleteRequestBuilder<MessageProcessingLogRunStepProperties<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MessageProcessingLogRunStepProperties`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MessageProcessingLogRunStepProperties` by taking the entity as a parameter.
   */
  delete(
    entity: MessageProcessingLogRunStepProperties<T>
  ): DeleteRequestBuilder<MessageProcessingLogRunStepProperties<T>, T>;
  delete(
    runIdOrEntity: any,
    childCount?: number,
    name?: string
  ): DeleteRequestBuilder<MessageProcessingLogRunStepProperties<T>, T> {
    return new DeleteRequestBuilder<
      MessageProcessingLogRunStepProperties<T>,
      T
    >(
      this.entityApi,
      runIdOrEntity instanceof MessageProcessingLogRunStepProperties
        ? runIdOrEntity
        : {
            RunId: runIdOrEntity!,
            ChildCount: childCount!,
            Name: name!
          }
    );
  }
}
