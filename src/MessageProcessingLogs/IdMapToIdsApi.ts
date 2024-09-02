/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { IdMapToIds } from './IdMapToIds';
import { IdMapToIdsRequestBuilder } from './IdMapToIdsRequestBuilder';
import { IdMapFromIdsApi } from './IdMapFromIdsApi';
import { IdMapFromId2SApi } from './IdMapFromId2SApi';
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
  OneToOneLink,
  Link
} from '@sap-cloud-sdk/odata-v2';
export class IdMapToIdsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<IdMapToIds<DeSerializersT>, DeSerializersT>
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
  ): IdMapToIdsApi<DeSerializersT> {
    return new IdMapToIdsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link fromId_1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FROM_ID_1: OneToOneLink<
      IdMapToIds<DeSerializersT>,
      DeSerializersT,
      IdMapFromIdsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link fromId2S} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FROM_ID_2_S: Link<
      IdMapToIds<DeSerializersT>,
      DeSerializersT,
      IdMapFromId2SApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      IdMapFromIdsApi<DeSerializersT>,
      IdMapFromId2SApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      FROM_ID_1: new OneToOneLink('FromId', this, linkedApis[0]),
      FROM_ID_2_S: new Link('FromId2s', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = IdMapToIds;

  requestBuilder(): IdMapToIdsRequestBuilder<DeSerializersT> {
    return new IdMapToIdsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    IdMapToIds<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<IdMapToIds<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<IdMapToIds<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof IdMapToIds, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(IdMapToIds, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TO_ID: OrderableEdmTypeField<
      IdMapToIds<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FROM_ID: OrderableEdmTypeField<
      IdMapToIds<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAPPER: OrderableEdmTypeField<
      IdMapToIds<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPIRATION_TIME: OrderableEdmTypeField<
      IdMapToIds<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link fromId_1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FROM_ID_1: OneToOneLink<
      IdMapToIds<DeSerializersT>,
      DeSerializersT,
      IdMapFromIdsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link fromId2S} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FROM_ID_2_S: Link<
      IdMapToIds<DeSerializersT>,
      DeSerializersT,
      IdMapFromId2SApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<IdMapToIds<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link toId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_ID: fieldBuilder.buildEdmTypeField('ToId', 'Edm.String', false),
        /**
         * Static representation of the {@link fromId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_ID: fieldBuilder.buildEdmTypeField('FromId_', 'Edm.String', true),
        /**
         * Static representation of the {@link mapper} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAPPER: fieldBuilder.buildEdmTypeField('Mapper', 'Edm.String', true),
        /**
         * Static representation of the {@link expirationTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPIRATION_TIME: fieldBuilder.buildEdmTypeField(
          'ExpirationTime',
          'Edm.DateTimeOffset',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', IdMapToIds)
      };
    }

    return this._schema;
  }
}
