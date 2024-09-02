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
import { IntegrationAdapterDesigntimeArtifacts } from './IntegrationAdapterDesigntimeArtifacts';

/**
 * Request builder class for operations supported on the {@link IntegrationAdapterDesigntimeArtifacts} entity.
 */
export class IntegrationAdapterDesigntimeArtifactsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<IntegrationAdapterDesigntimeArtifacts<T>, T> {
  /**
   * Returns a request builder for querying all `IntegrationAdapterDesigntimeArtifacts` entities.
   * @returns A request builder for creating requests to retrieve all `IntegrationAdapterDesigntimeArtifacts` entities.
   */
  getAll(): GetAllRequestBuilder<IntegrationAdapterDesigntimeArtifacts<T>, T> {
    return new GetAllRequestBuilder<
      IntegrationAdapterDesigntimeArtifacts<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `IntegrationAdapterDesigntimeArtifacts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `IntegrationAdapterDesigntimeArtifacts`.
   */
  create(
    entity: IntegrationAdapterDesigntimeArtifacts<T>
  ): CreateRequestBuilder<IntegrationAdapterDesigntimeArtifacts<T>, T> {
    return new CreateRequestBuilder<
      IntegrationAdapterDesigntimeArtifacts<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `IntegrationAdapterDesigntimeArtifacts` entity based on its keys.
   * @param id Key property. See {@link IntegrationAdapterDesigntimeArtifacts.id}.
   * @returns A request builder for creating requests to retrieve one `IntegrationAdapterDesigntimeArtifacts` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<IntegrationAdapterDesigntimeArtifacts<T>, T> {
    return new GetByKeyRequestBuilder<
      IntegrationAdapterDesigntimeArtifacts<T>,
      T
    >(this.entityApi, { Id: id });
  }

  /**
   * Returns a request builder for updating an entity of type `IntegrationAdapterDesigntimeArtifacts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `IntegrationAdapterDesigntimeArtifacts`.
   */
  update(
    entity: IntegrationAdapterDesigntimeArtifacts<T>
  ): UpdateRequestBuilder<IntegrationAdapterDesigntimeArtifacts<T>, T> {
    return new UpdateRequestBuilder<
      IntegrationAdapterDesigntimeArtifacts<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `IntegrationAdapterDesigntimeArtifacts`.
   * @param id Key property. See {@link IntegrationAdapterDesigntimeArtifacts.id}.
   * @returns A request builder for creating requests that delete an entity of type `IntegrationAdapterDesigntimeArtifacts`.
   */
  delete(
    id: string
  ): DeleteRequestBuilder<IntegrationAdapterDesigntimeArtifacts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `IntegrationAdapterDesigntimeArtifacts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `IntegrationAdapterDesigntimeArtifacts` by taking the entity as a parameter.
   */
  delete(
    entity: IntegrationAdapterDesigntimeArtifacts<T>
  ): DeleteRequestBuilder<IntegrationAdapterDesigntimeArtifacts<T>, T>;
  delete(
    idOrEntity: any
  ): DeleteRequestBuilder<IntegrationAdapterDesigntimeArtifacts<T>, T> {
    return new DeleteRequestBuilder<
      IntegrationAdapterDesigntimeArtifacts<T>,
      T
    >(
      this.entityApi,
      idOrEntity instanceof IntegrationAdapterDesigntimeArtifacts
        ? idOrEntity
        : { Id: idOrEntity! }
    );
  }
}
