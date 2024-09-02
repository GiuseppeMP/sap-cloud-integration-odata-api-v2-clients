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
import { KeystoreEntries } from './KeystoreEntries';

/**
 * Request builder class for operations supported on the {@link KeystoreEntries} entity.
 */
export class KeystoreEntriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<KeystoreEntries<T>, T> {
  /**
   * Returns a request builder for querying all `KeystoreEntries` entities.
   * @returns A request builder for creating requests to retrieve all `KeystoreEntries` entities.
   */
  getAll(): GetAllRequestBuilder<KeystoreEntries<T>, T> {
    return new GetAllRequestBuilder<KeystoreEntries<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `KeystoreEntries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `KeystoreEntries`.
   */
  create(
    entity: KeystoreEntries<T>
  ): CreateRequestBuilder<KeystoreEntries<T>, T> {
    return new CreateRequestBuilder<KeystoreEntries<T>, T>(
      this.entityApi,
      entity
    );
  }
}
