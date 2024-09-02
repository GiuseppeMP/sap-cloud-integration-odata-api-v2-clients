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
import { MessageProcessingLogRunSteps } from './MessageProcessingLogRunSteps';

/**
 * Request builder class for operations supported on the {@link MessageProcessingLogRunSteps} entity.
 */
export class MessageProcessingLogRunStepsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MessageProcessingLogRunSteps<T>, T> {
  /**
   * Returns a request builder for querying all `MessageProcessingLogRunSteps` entities.
   * @returns A request builder for creating requests to retrieve all `MessageProcessingLogRunSteps` entities.
   */
  getAll(): GetAllRequestBuilder<MessageProcessingLogRunSteps<T>, T> {
    return new GetAllRequestBuilder<MessageProcessingLogRunSteps<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MessageProcessingLogRunSteps` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MessageProcessingLogRunSteps`.
   */
  create(
    entity: MessageProcessingLogRunSteps<T>
  ): CreateRequestBuilder<MessageProcessingLogRunSteps<T>, T> {
    return new CreateRequestBuilder<MessageProcessingLogRunSteps<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MessageProcessingLogRunSteps` entity based on its keys.
   * @param runId Key property. See {@link MessageProcessingLogRunSteps.runId}.
   * @param childCount Key property. See {@link MessageProcessingLogRunSteps.childCount}.
   * @returns A request builder for creating requests to retrieve one `MessageProcessingLogRunSteps` entity based on its keys.
   */
  getByKey(
    runId: DeserializedType<T, 'Edm.String'>,
    childCount: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<MessageProcessingLogRunSteps<T>, T> {
    return new GetByKeyRequestBuilder<MessageProcessingLogRunSteps<T>, T>(
      this.entityApi,
      {
        RunId: runId,
        ChildCount: childCount
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MessageProcessingLogRunSteps`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MessageProcessingLogRunSteps`.
   */
  update(
    entity: MessageProcessingLogRunSteps<T>
  ): UpdateRequestBuilder<MessageProcessingLogRunSteps<T>, T> {
    return new UpdateRequestBuilder<MessageProcessingLogRunSteps<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MessageProcessingLogRunSteps`.
   * @param runId Key property. See {@link MessageProcessingLogRunSteps.runId}.
   * @param childCount Key property. See {@link MessageProcessingLogRunSteps.childCount}.
   * @returns A request builder for creating requests that delete an entity of type `MessageProcessingLogRunSteps`.
   */
  delete(
    runId: string,
    childCount: number
  ): DeleteRequestBuilder<MessageProcessingLogRunSteps<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MessageProcessingLogRunSteps`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MessageProcessingLogRunSteps` by taking the entity as a parameter.
   */
  delete(
    entity: MessageProcessingLogRunSteps<T>
  ): DeleteRequestBuilder<MessageProcessingLogRunSteps<T>, T>;
  delete(
    runIdOrEntity: any,
    childCount?: number
  ): DeleteRequestBuilder<MessageProcessingLogRunSteps<T>, T> {
    return new DeleteRequestBuilder<MessageProcessingLogRunSteps<T>, T>(
      this.entityApi,
      runIdOrEntity instanceof MessageProcessingLogRunSteps
        ? runIdOrEntity
        : {
            RunId: runIdOrEntity!,
            ChildCount: childCount!
          }
    );
  }
}
