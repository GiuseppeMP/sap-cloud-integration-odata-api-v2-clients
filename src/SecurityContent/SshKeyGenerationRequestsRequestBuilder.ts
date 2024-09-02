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
import { SshKeyGenerationRequests } from './SshKeyGenerationRequests';

/**
 * Request builder class for operations supported on the {@link SshKeyGenerationRequests} entity.
 */
export class SshKeyGenerationRequestsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SshKeyGenerationRequests<T>, T> {
  /**
   * Returns a request builder for querying all `SshKeyGenerationRequests` entities.
   * @returns A request builder for creating requests to retrieve all `SshKeyGenerationRequests` entities.
   */
  getAll(): GetAllRequestBuilder<SshKeyGenerationRequests<T>, T> {
    return new GetAllRequestBuilder<SshKeyGenerationRequests<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SshKeyGenerationRequests` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SshKeyGenerationRequests`.
   */
  create(
    entity: SshKeyGenerationRequests<T>
  ): CreateRequestBuilder<SshKeyGenerationRequests<T>, T> {
    return new CreateRequestBuilder<SshKeyGenerationRequests<T>, T>(
      this.entityApi,
      entity
    );
  }
}
