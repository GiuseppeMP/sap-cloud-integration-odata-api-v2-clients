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
import { IntegrationRuntimeArtifacts_1 } from './IntegrationRuntimeArtifacts_1';

/**
 * Request builder class for operations supported on the {@link IntegrationRuntimeArtifacts_1} entity.
 */
export class IntegrationRuntimeArtifacts_1RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<IntegrationRuntimeArtifacts_1<T>, T> {
  /**
   * Returns a request builder for querying all `IntegrationRuntimeArtifacts_1` entities.
   * @returns A request builder for creating requests to retrieve all `IntegrationRuntimeArtifacts_1` entities.
   */
  getAll(): GetAllRequestBuilder<IntegrationRuntimeArtifacts_1<T>, T> {
    return new GetAllRequestBuilder<IntegrationRuntimeArtifacts_1<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `IntegrationRuntimeArtifacts_1` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `IntegrationRuntimeArtifacts_1`.
   */
  create(
    entity: IntegrationRuntimeArtifacts_1<T>
  ): CreateRequestBuilder<IntegrationRuntimeArtifacts_1<T>, T> {
    return new CreateRequestBuilder<IntegrationRuntimeArtifacts_1<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `IntegrationRuntimeArtifacts_1` entity based on its keys.
   * @param id_1 Key property. See {@link IntegrationRuntimeArtifacts_1.id_1}.
   * @returns A request builder for creating requests to retrieve one `IntegrationRuntimeArtifacts_1` entity based on its keys.
   */
  getByKey(
    id_1: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<IntegrationRuntimeArtifacts_1<T>, T> {
    return new GetByKeyRequestBuilder<IntegrationRuntimeArtifacts_1<T>, T>(
      this.entityApi,
      { Id: id_1 }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `IntegrationRuntimeArtifacts_1`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `IntegrationRuntimeArtifacts_1`.
   */
  update(
    entity: IntegrationRuntimeArtifacts_1<T>
  ): UpdateRequestBuilder<IntegrationRuntimeArtifacts_1<T>, T> {
    return new UpdateRequestBuilder<IntegrationRuntimeArtifacts_1<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `IntegrationRuntimeArtifacts_1`.
   * @param id_1 Key property. See {@link IntegrationRuntimeArtifacts_1.id_1}.
   * @returns A request builder for creating requests that delete an entity of type `IntegrationRuntimeArtifacts_1`.
   */
  delete(
    id_1: string
  ): DeleteRequestBuilder<IntegrationRuntimeArtifacts_1<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `IntegrationRuntimeArtifacts_1`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `IntegrationRuntimeArtifacts_1` by taking the entity as a parameter.
   */
  delete(
    entity: IntegrationRuntimeArtifacts_1<T>
  ): DeleteRequestBuilder<IntegrationRuntimeArtifacts_1<T>, T>;
  delete(
    id_1OrEntity: any
  ): DeleteRequestBuilder<IntegrationRuntimeArtifacts_1<T>, T> {
    return new DeleteRequestBuilder<IntegrationRuntimeArtifacts_1<T>, T>(
      this.entityApi,
      id_1OrEntity instanceof IntegrationRuntimeArtifacts_1
        ? id_1OrEntity
        : { Id: id_1OrEntity! }
    );
  }
}
