/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { IdMapFromId2S } from './IdMapFromId2S';
import { IdMapFromId2SRequestBuilder } from './IdMapFromId2SRequestBuilder';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export class IdMapFromId2SApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<IdMapFromId2S<DeSerializersT>, DeSerializersT>
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
  ): IdMapFromId2SApi<DeSerializersT> {
    return new IdMapFromId2SApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link toId} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_ID: OneToOneLink<
      IdMapFromId2S<DeSerializersT>,
      DeSerializersT,
      IdMapToIdsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [IdMapToIdsApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      TO_ID: new OneToOneLink('ToId', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = IdMapFromId2S;

  requestBuilder(): IdMapFromId2SRequestBuilder<DeSerializersT> {
    return new IdMapFromId2SRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    IdMapFromId2S<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<IdMapFromId2S<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<IdMapFromId2S<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof IdMapFromId2S, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(IdMapFromId2S, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    FROM_ID: OrderableEdmTypeField<
      IdMapFromId2S<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TO_ID_2: OrderableEdmTypeField<
      IdMapFromId2S<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAPPER: OrderableEdmTypeField<
      IdMapFromId2S<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPIRATION_TIME: OrderableEdmTypeField<
      IdMapFromId2S<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toId} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_ID: OneToOneLink<
      IdMapFromId2S<DeSerializersT>,
      DeSerializersT,
      IdMapToIdsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<IdMapFromId2S<DeSerializers>>;
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
        /**
         * Static representation of the {@link toId2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_ID_2: fieldBuilder.buildEdmTypeField('ToId2', 'Edm.String', true),
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
        ALL_FIELDS: new AllFields('*', IdMapFromId2S)
      };
    }

    return this._schema;
  }
}
