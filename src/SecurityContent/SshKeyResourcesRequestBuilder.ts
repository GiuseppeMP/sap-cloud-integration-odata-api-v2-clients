/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  GetAllRequestBuilder,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { SshKeyResources } from './SshKeyResources';

/**
 * Request builder class for operations supported on the {@link SshKeyResources} entity.
 */
export class SshKeyResourcesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SshKeyResources<T>, T> {
  /**
   * Returns a request builder for querying all `SshKeyResources` entities.
   * @returns A request builder for creating requests to retrieve all `SshKeyResources` entities.
   */
  getAll(): GetAllRequestBuilder<SshKeyResources<T>, T> {
    return new GetAllRequestBuilder<SshKeyResources<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SshKeyResources` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SshKeyResources`.
   */
  create(
    entity: SshKeyResources<T>
  ): CreateRequestBuilder<SshKeyResources<T>, T> {
    return new CreateRequestBuilder<SshKeyResources<T>, T>(
      this.entityApi,
      entity
    );
  }
}
