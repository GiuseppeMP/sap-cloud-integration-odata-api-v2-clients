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
import { MessageMappingDesigntimeArtifacts } from './MessageMappingDesigntimeArtifacts';

/**
 * Request builder class for operations supported on the {@link MessageMappingDesigntimeArtifacts} entity.
 */
export class MessageMappingDesigntimeArtifactsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MessageMappingDesigntimeArtifacts<T>, T> {
  /**
   * Returns a request builder for querying all `MessageMappingDesigntimeArtifacts` entities.
   * @returns A request builder for creating requests to retrieve all `MessageMappingDesigntimeArtifacts` entities.
   */
  getAll(): GetAllRequestBuilder<MessageMappingDesigntimeArtifacts<T>, T> {
    return new GetAllRequestBuilder<MessageMappingDesigntimeArtifacts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MessageMappingDesigntimeArtifacts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MessageMappingDesigntimeArtifacts`.
   */
  create(
    entity: MessageMappingDesigntimeArtifacts<T>
  ): CreateRequestBuilder<MessageMappingDesigntimeArtifacts<T>, T> {
    return new CreateRequestBuilder<MessageMappingDesigntimeArtifacts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MessageMappingDesigntimeArtifacts` entity based on its keys.
   * @param id Key property. See {@link MessageMappingDesigntimeArtifacts.id}.
   * @param version Key property. See {@link MessageMappingDesigntimeArtifacts.version}.
   * @returns A request builder for creating requests to retrieve one `MessageMappingDesigntimeArtifacts` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.String'>,
    version: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<MessageMappingDesigntimeArtifacts<T>, T> {
    return new GetByKeyRequestBuilder<MessageMappingDesigntimeArtifacts<T>, T>(
      this.entityApi,
      {
        Id: id,
        Version: version
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MessageMappingDesigntimeArtifacts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MessageMappingDesigntimeArtifacts`.
   */
  update(
    entity: MessageMappingDesigntimeArtifacts<T>
  ): UpdateRequestBuilder<MessageMappingDesigntimeArtifacts<T>, T> {
    return new UpdateRequestBuilder<MessageMappingDesigntimeArtifacts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MessageMappingDesigntimeArtifacts`.
   * @param id Key property. See {@link MessageMappingDesigntimeArtifacts.id}.
   * @param version Key property. See {@link MessageMappingDesigntimeArtifacts.version}.
   * @returns A request builder for creating requests that delete an entity of type `MessageMappingDesigntimeArtifacts`.
   */
  delete(
    id: string,
    version: string
  ): DeleteRequestBuilder<MessageMappingDesigntimeArtifacts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MessageMappingDesigntimeArtifacts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MessageMappingDesigntimeArtifacts` by taking the entity as a parameter.
   */
  delete(
    entity: MessageMappingDesigntimeArtifacts<T>
  ): DeleteRequestBuilder<MessageMappingDesigntimeArtifacts<T>, T>;
  delete(
    idOrEntity: any,
    version?: string
  ): DeleteRequestBuilder<MessageMappingDesigntimeArtifacts<T>, T> {
    return new DeleteRequestBuilder<MessageMappingDesigntimeArtifacts<T>, T>(
      this.entityApi,
      idOrEntity instanceof MessageMappingDesigntimeArtifacts
        ? idOrEntity
        : {
            Id: idOrEntity!,
            Version: version!
          }
    );
  }
}
