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
import { ValueMappingDesigntimeArtifacts } from './ValueMappingDesigntimeArtifacts';

/**
 * Request builder class for operations supported on the {@link ValueMappingDesigntimeArtifacts} entity.
 */
export class ValueMappingDesigntimeArtifactsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ValueMappingDesigntimeArtifacts<T>, T> {
  /**
   * Returns a request builder for querying all `ValueMappingDesigntimeArtifacts` entities.
   * @returns A request builder for creating requests to retrieve all `ValueMappingDesigntimeArtifacts` entities.
   */
  getAll(): GetAllRequestBuilder<ValueMappingDesigntimeArtifacts<T>, T> {
    return new GetAllRequestBuilder<ValueMappingDesigntimeArtifacts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ValueMappingDesigntimeArtifacts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ValueMappingDesigntimeArtifacts`.
   */
  create(
    entity: ValueMappingDesigntimeArtifacts<T>
  ): CreateRequestBuilder<ValueMappingDesigntimeArtifacts<T>, T> {
    return new CreateRequestBuilder<ValueMappingDesigntimeArtifacts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ValueMappingDesigntimeArtifacts` entity based on its keys.
   * @param id Key property. See {@link ValueMappingDesigntimeArtifacts.id}.
   * @param version Key property. See {@link ValueMappingDesigntimeArtifacts.version}.
   * @returns A request builder for creating requests to retrieve one `ValueMappingDesigntimeArtifacts` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.String'>,
    version: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ValueMappingDesigntimeArtifacts<T>, T> {
    return new GetByKeyRequestBuilder<ValueMappingDesigntimeArtifacts<T>, T>(
      this.entityApi,
      {
        Id: id,
        Version: version
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ValueMappingDesigntimeArtifacts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ValueMappingDesigntimeArtifacts`.
   */
  update(
    entity: ValueMappingDesigntimeArtifacts<T>
  ): UpdateRequestBuilder<ValueMappingDesigntimeArtifacts<T>, T> {
    return new UpdateRequestBuilder<ValueMappingDesigntimeArtifacts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ValueMappingDesigntimeArtifacts`.
   * @param id Key property. See {@link ValueMappingDesigntimeArtifacts.id}.
   * @param version Key property. See {@link ValueMappingDesigntimeArtifacts.version}.
   * @returns A request builder for creating requests that delete an entity of type `ValueMappingDesigntimeArtifacts`.
   */
  delete(
    id: string,
    version: string
  ): DeleteRequestBuilder<ValueMappingDesigntimeArtifacts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ValueMappingDesigntimeArtifacts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ValueMappingDesigntimeArtifacts` by taking the entity as a parameter.
   */
  delete(
    entity: ValueMappingDesigntimeArtifacts<T>
  ): DeleteRequestBuilder<ValueMappingDesigntimeArtifacts<T>, T>;
  delete(
    idOrEntity: any,
    version?: string
  ): DeleteRequestBuilder<ValueMappingDesigntimeArtifacts<T>, T> {
    return new DeleteRequestBuilder<ValueMappingDesigntimeArtifacts<T>, T>(
      this.entityApi,
      idOrEntity instanceof ValueMappingDesigntimeArtifacts
        ? idOrEntity
        : {
            Id: idOrEntity!,
            Version: version!
          }
    );
  }
}
