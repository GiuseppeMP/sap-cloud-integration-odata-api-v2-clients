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
import { IntegrationDesigntimeArtifacts } from './IntegrationDesigntimeArtifacts';

/**
 * Request builder class for operations supported on the {@link IntegrationDesigntimeArtifacts} entity.
 */
export class IntegrationDesigntimeArtifactsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<IntegrationDesigntimeArtifacts<T>, T> {
  /**
   * Returns a request builder for querying all `IntegrationDesigntimeArtifacts` entities.
   * @returns A request builder for creating requests to retrieve all `IntegrationDesigntimeArtifacts` entities.
   */
  getAll(): GetAllRequestBuilder<IntegrationDesigntimeArtifacts<T>, T> {
    return new GetAllRequestBuilder<IntegrationDesigntimeArtifacts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `IntegrationDesigntimeArtifacts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `IntegrationDesigntimeArtifacts`.
   */
  create(
    entity: IntegrationDesigntimeArtifacts<T>
  ): CreateRequestBuilder<IntegrationDesigntimeArtifacts<T>, T> {
    return new CreateRequestBuilder<IntegrationDesigntimeArtifacts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `IntegrationDesigntimeArtifacts` entity based on its keys.
   * @param id Key property. See {@link IntegrationDesigntimeArtifacts.id}.
   * @param version Key property. See {@link IntegrationDesigntimeArtifacts.version}.
   * @returns A request builder for creating requests to retrieve one `IntegrationDesigntimeArtifacts` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.String'>,
    version: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<IntegrationDesigntimeArtifacts<T>, T> {
    return new GetByKeyRequestBuilder<IntegrationDesigntimeArtifacts<T>, T>(
      this.entityApi,
      {
        Id: id,
        Version: version
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `IntegrationDesigntimeArtifacts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `IntegrationDesigntimeArtifacts`.
   */
  update(
    entity: IntegrationDesigntimeArtifacts<T>
  ): UpdateRequestBuilder<IntegrationDesigntimeArtifacts<T>, T> {
    return new UpdateRequestBuilder<IntegrationDesigntimeArtifacts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `IntegrationDesigntimeArtifacts`.
   * @param id Key property. See {@link IntegrationDesigntimeArtifacts.id}.
   * @param version Key property. See {@link IntegrationDesigntimeArtifacts.version}.
   * @returns A request builder for creating requests that delete an entity of type `IntegrationDesigntimeArtifacts`.
   */
  delete(
    id: string,
    version: string
  ): DeleteRequestBuilder<IntegrationDesigntimeArtifacts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `IntegrationDesigntimeArtifacts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `IntegrationDesigntimeArtifacts` by taking the entity as a parameter.
   */
  delete(
    entity: IntegrationDesigntimeArtifacts<T>
  ): DeleteRequestBuilder<IntegrationDesigntimeArtifacts<T>, T>;
  delete(
    idOrEntity: any,
    version?: string
  ): DeleteRequestBuilder<IntegrationDesigntimeArtifacts<T>, T> {
    return new DeleteRequestBuilder<IntegrationDesigntimeArtifacts<T>, T>(
      this.entityApi,
      idOrEntity instanceof IntegrationDesigntimeArtifacts
        ? idOrEntity
        : {
            Id: idOrEntity!,
            Version: version!
          }
    );
  }
}
