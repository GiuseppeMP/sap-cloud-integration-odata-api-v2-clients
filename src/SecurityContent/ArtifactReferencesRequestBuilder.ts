/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { ArtifactReferences } from './ArtifactReferences';

/**
 * Request builder class for operations supported on the {@link ArtifactReferences} entity.
 */
export class ArtifactReferencesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ArtifactReferences<T>, T> {
  /**
   * Returns a request builder for querying all `ArtifactReferences` entities.
   * @returns A request builder for creating requests to retrieve all `ArtifactReferences` entities.
   */
  getAll(): GetAllRequestBuilder<ArtifactReferences<T>, T> {
    return new GetAllRequestBuilder<ArtifactReferences<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ArtifactReferences` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ArtifactReferences`.
   */
  create(
    entity: ArtifactReferences<T>
  ): CreateRequestBuilder<ArtifactReferences<T>, T> {
    return new CreateRequestBuilder<ArtifactReferences<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ArtifactReferences` entity based on its keys.
   * @param id Key property. See {@link ArtifactReferences.id}.
   * @returns A request builder for creating requests to retrieve one `ArtifactReferences` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<ArtifactReferences<T>, T> {
    return new GetByKeyRequestBuilder<ArtifactReferences<T>, T>(
      this.entityApi,
      { Id: id }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ArtifactReferences`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ArtifactReferences`.
   */
  update(
    entity: ArtifactReferences<T>
  ): UpdateRequestBuilder<ArtifactReferences<T>, T> {
    return new UpdateRequestBuilder<ArtifactReferences<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ArtifactReferences`.
   * @param id Key property. See {@link ArtifactReferences.id}.
   * @returns A request builder for creating requests that delete an entity of type `ArtifactReferences`.
   */
  delete(id: BigNumber): DeleteRequestBuilder<ArtifactReferences<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ArtifactReferences`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ArtifactReferences` by taking the entity as a parameter.
   */
  delete(
    entity: ArtifactReferences<T>
  ): DeleteRequestBuilder<ArtifactReferences<T>, T>;
  delete(idOrEntity: any): DeleteRequestBuilder<ArtifactReferences<T>, T> {
    return new DeleteRequestBuilder<ArtifactReferences<T>, T>(
      this.entityApi,
      idOrEntity instanceof ArtifactReferences
        ? idOrEntity
        : { Id: idOrEntity! }
    );
  }
}
