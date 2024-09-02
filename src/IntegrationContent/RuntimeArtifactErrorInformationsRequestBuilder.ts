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
import { RuntimeArtifactErrorInformations } from './RuntimeArtifactErrorInformations';

/**
 * Request builder class for operations supported on the {@link RuntimeArtifactErrorInformations} entity.
 */
export class RuntimeArtifactErrorInformationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RuntimeArtifactErrorInformations<T>, T> {
  /**
   * Returns a request builder for querying all `RuntimeArtifactErrorInformations` entities.
   * @returns A request builder for creating requests to retrieve all `RuntimeArtifactErrorInformations` entities.
   */
  getAll(): GetAllRequestBuilder<RuntimeArtifactErrorInformations<T>, T> {
    return new GetAllRequestBuilder<RuntimeArtifactErrorInformations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RuntimeArtifactErrorInformations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RuntimeArtifactErrorInformations`.
   */
  create(
    entity: RuntimeArtifactErrorInformations<T>
  ): CreateRequestBuilder<RuntimeArtifactErrorInformations<T>, T> {
    return new CreateRequestBuilder<RuntimeArtifactErrorInformations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RuntimeArtifactErrorInformations` entity based on its keys.
   * @param id Key property. See {@link RuntimeArtifactErrorInformations.id}.
   * @returns A request builder for creating requests to retrieve one `RuntimeArtifactErrorInformations` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RuntimeArtifactErrorInformations<T>, T> {
    return new GetByKeyRequestBuilder<RuntimeArtifactErrorInformations<T>, T>(
      this.entityApi,
      { Id: id }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RuntimeArtifactErrorInformations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RuntimeArtifactErrorInformations`.
   */
  update(
    entity: RuntimeArtifactErrorInformations<T>
  ): UpdateRequestBuilder<RuntimeArtifactErrorInformations<T>, T> {
    return new UpdateRequestBuilder<RuntimeArtifactErrorInformations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RuntimeArtifactErrorInformations`.
   * @param id Key property. See {@link RuntimeArtifactErrorInformations.id}.
   * @returns A request builder for creating requests that delete an entity of type `RuntimeArtifactErrorInformations`.
   */
  delete(
    id: string
  ): DeleteRequestBuilder<RuntimeArtifactErrorInformations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RuntimeArtifactErrorInformations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RuntimeArtifactErrorInformations` by taking the entity as a parameter.
   */
  delete(
    entity: RuntimeArtifactErrorInformations<T>
  ): DeleteRequestBuilder<RuntimeArtifactErrorInformations<T>, T>;
  delete(
    idOrEntity: any
  ): DeleteRequestBuilder<RuntimeArtifactErrorInformations<T>, T> {
    return new DeleteRequestBuilder<RuntimeArtifactErrorInformations<T>, T>(
      this.entityApi,
      idOrEntity instanceof RuntimeArtifactErrorInformations
        ? idOrEntity
        : { Id: idOrEntity! }
    );
  }
}
