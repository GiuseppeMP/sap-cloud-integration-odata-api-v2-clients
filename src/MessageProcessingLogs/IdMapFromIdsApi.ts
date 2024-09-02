/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { IdMapFromIds } from './IdMapFromIds';
import { IdMapFromIdsRequestBuilder } from './IdMapFromIdsRequestBuilder';
import { IdMapToIdsApi } from './IdMapToIdsApi';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  Link
} from '@sap-cloud-sdk/odata-v2';
export class IdMapFromIdsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<IdMapFromIds<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): IdMapFromIdsApi<DeSerializersT> {
    return new IdMapFromIdsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link toIds} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_IDS: Link<
      IdMapFromIds<DeSerializersT>,
      DeSerializersT,
      IdMapToIdsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [IdMapToIdsApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      TO_IDS: new Link('ToIds', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = IdMapFromIds;

  requestBuilder(): IdMapFromIdsRequestBuilder<DeSerializersT> {
    return new IdMapFromIdsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    IdMapFromIds<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<IdMapFromIds<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<IdMapFromIds<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof IdMapFromIds, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(IdMapFromIds, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    FROM_ID: OrderableEdmTypeField<
      IdMapFromIds<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toIds} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_IDS: Link<
      IdMapFromIds<DeSerializersT>,
      DeSerializersT,
      IdMapToIdsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<IdMapFromIds<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link fromId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_ID: fieldBuilder.buildEdmTypeField('FromId', 'Edm.String', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', IdMapFromIds)
      };
    }

    return this._schema;
  }
}
