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
import { ScriptCollectionDesigntimeArtifacts } from './ScriptCollectionDesigntimeArtifacts';

/**
 * Request builder class for operations supported on the {@link ScriptCollectionDesigntimeArtifacts} entity.
 */
export class ScriptCollectionDesigntimeArtifactsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ScriptCollectionDesigntimeArtifacts<T>, T> {
  /**
   * Returns a request builder for querying all `ScriptCollectionDesigntimeArtifacts` entities.
   * @returns A request builder for creating requests to retrieve all `ScriptCollectionDesigntimeArtifacts` entities.
   */
  getAll(): GetAllRequestBuilder<ScriptCollectionDesigntimeArtifacts<T>, T> {
    return new GetAllRequestBuilder<ScriptCollectionDesigntimeArtifacts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ScriptCollectionDesigntimeArtifacts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ScriptCollectionDesigntimeArtifacts`.
   */
  create(
    entity: ScriptCollectionDesigntimeArtifacts<T>
  ): CreateRequestBuilder<ScriptCollectionDesigntimeArtifacts<T>, T> {
    return new CreateRequestBuilder<ScriptCollectionDesigntimeArtifacts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ScriptCollectionDesigntimeArtifacts` entity based on its keys.
   * @param id Key property. See {@link ScriptCollectionDesigntimeArtifacts.id}.
   * @param version Key property. See {@link ScriptCollectionDesigntimeArtifacts.version}.
   * @returns A request builder for creating requests to retrieve one `ScriptCollectionDesigntimeArtifacts` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.String'>,
    version: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ScriptCollectionDesigntimeArtifacts<T>, T> {
    return new GetByKeyRequestBuilder<
      ScriptCollectionDesigntimeArtifacts<T>,
      T
    >(this.entityApi, {
      Id: id,
      Version: version
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ScriptCollectionDesigntimeArtifacts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ScriptCollectionDesigntimeArtifacts`.
   */
  update(
    entity: ScriptCollectionDesigntimeArtifacts<T>
  ): UpdateRequestBuilder<ScriptCollectionDesigntimeArtifacts<T>, T> {
    return new UpdateRequestBuilder<ScriptCollectionDesigntimeArtifacts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ScriptCollectionDesigntimeArtifacts`.
   * @param id Key property. See {@link ScriptCollectionDesigntimeArtifacts.id}.
   * @param version Key property. See {@link ScriptCollectionDesigntimeArtifacts.version}.
   * @returns A request builder for creating requests that delete an entity of type `ScriptCollectionDesigntimeArtifacts`.
   */
  delete(
    id: string,
    version: string
  ): DeleteRequestBuilder<ScriptCollectionDesigntimeArtifacts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ScriptCollectionDesigntimeArtifacts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ScriptCollectionDesigntimeArtifacts` by taking the entity as a parameter.
   */
  delete(
    entity: ScriptCollectionDesigntimeArtifacts<T>
  ): DeleteRequestBuilder<ScriptCollectionDesigntimeArtifacts<T>, T>;
  delete(
    idOrEntity: any,
    version?: string
  ): DeleteRequestBuilder<ScriptCollectionDesigntimeArtifacts<T>, T> {
    return new DeleteRequestBuilder<ScriptCollectionDesigntimeArtifacts<T>, T>(
      this.entityApi,
      idOrEntity instanceof ScriptCollectionDesigntimeArtifacts
        ? idOrEntity
        : {
            Id: idOrEntity!,
            Version: version!
          }
    );
  }
}
