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
import { ValMapSchema } from './ValMapSchema';

/**
 * Request builder class for operations supported on the {@link ValMapSchema} entity.
 */
export class ValMapSchemaRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ValMapSchema<T>, T> {
  /**
   * Returns a request builder for querying all `ValMapSchema` entities.
   * @returns A request builder for creating requests to retrieve all `ValMapSchema` entities.
   */
  getAll(): GetAllRequestBuilder<ValMapSchema<T>, T> {
    return new GetAllRequestBuilder<ValMapSchema<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ValMapSchema` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ValMapSchema`.
   */
  create(entity: ValMapSchema<T>): CreateRequestBuilder<ValMapSchema<T>, T> {
    return new CreateRequestBuilder<ValMapSchema<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ValMapSchema` entity based on its keys.
   * @param srcAgency Key property. See {@link ValMapSchema.srcAgency}.
   * @param srcId Key property. See {@link ValMapSchema.srcId}.
   * @param tgtAgency Key property. See {@link ValMapSchema.tgtAgency}.
   * @param tgtId Key property. See {@link ValMapSchema.tgtId}.
   * @returns A request builder for creating requests to retrieve one `ValMapSchema` entity based on its keys.
   */
  getByKey(
    srcAgency: DeserializedType<T, 'Edm.String'>,
    srcId: DeserializedType<T, 'Edm.String'>,
    tgtAgency: DeserializedType<T, 'Edm.String'>,
    tgtId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ValMapSchema<T>, T> {
    return new GetByKeyRequestBuilder<ValMapSchema<T>, T>(this.entityApi, {
      SrcAgency: srcAgency,
      SrcId: srcId,
      TgtAgency: tgtAgency,
      TgtId: tgtId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ValMapSchema`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ValMapSchema`.
   */
  update(entity: ValMapSchema<T>): UpdateRequestBuilder<ValMapSchema<T>, T> {
    return new UpdateRequestBuilder<ValMapSchema<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ValMapSchema`.
   * @param srcAgency Key property. See {@link ValMapSchema.srcAgency}.
   * @param srcId Key property. See {@link ValMapSchema.srcId}.
   * @param tgtAgency Key property. See {@link ValMapSchema.tgtAgency}.
   * @param tgtId Key property. See {@link ValMapSchema.tgtId}.
   * @returns A request builder for creating requests that delete an entity of type `ValMapSchema`.
   */
  delete(
    srcAgency: string,
    srcId: string,
    tgtAgency: string,
    tgtId: string
  ): DeleteRequestBuilder<ValMapSchema<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ValMapSchema`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ValMapSchema` by taking the entity as a parameter.
   */
  delete(entity: ValMapSchema<T>): DeleteRequestBuilder<ValMapSchema<T>, T>;
  delete(
    srcAgencyOrEntity: any,
    srcId?: string,
    tgtAgency?: string,
    tgtId?: string
  ): DeleteRequestBuilder<ValMapSchema<T>, T> {
    return new DeleteRequestBuilder<ValMapSchema<T>, T>(
      this.entityApi,
      srcAgencyOrEntity instanceof ValMapSchema
        ? srcAgencyOrEntity
        : {
            SrcAgency: srcAgencyOrEntity!,
            SrcId: srcId!,
            TgtAgency: tgtAgency!,
            TgtId: tgtId!
          }
    );
  }
}
