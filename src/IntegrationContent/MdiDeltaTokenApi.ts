/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MdiDeltaToken } from './MdiDeltaToken';
import { MdiDeltaTokenRequestBuilder } from './MdiDeltaTokenRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v2';
export class MdiDeltaTokenApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<MdiDeltaToken<DeSerializersT>, DeSerializersT>
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
  ): MdiDeltaTokenApi<DeSerializersT> {
    return new MdiDeltaTokenApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = MdiDeltaToken;

  requestBuilder(): MdiDeltaTokenRequestBuilder<DeSerializersT> {
    return new MdiDeltaTokenRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    MdiDeltaToken<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<MdiDeltaToken<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<MdiDeltaToken<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof MdiDeltaToken, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(MdiDeltaToken, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    OPERATION: OrderableEdmTypeField<
      MdiDeltaToken<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENTITY: OrderableEdmTypeField<
      MdiDeltaToken<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VERSION: OrderableEdmTypeField<
      MdiDeltaToken<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DELTA_TOKEN: OrderableEdmTypeField<
      MdiDeltaToken<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_UPDATE_TIMESTAMP: OrderableEdmTypeField<
      MdiDeltaToken<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<MdiDeltaToken<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link operation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATION: fieldBuilder.buildEdmTypeField(
          'Operation',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link entity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTITY: fieldBuilder.buildEdmTypeField('Entity', 'Edm.String', false),
        /**
         * Static representation of the {@link version} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VERSION: fieldBuilder.buildEdmTypeField('Version', 'Edm.String', false),
        /**
         * Static representation of the {@link deltaToken} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELTA_TOKEN: fieldBuilder.buildEdmTypeField(
          'DeltaToken',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lastUpdateTimestamp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_UPDATE_TIMESTAMP: fieldBuilder.buildEdmTypeField(
          'LastUpdateTimestamp',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', MdiDeltaToken)
      };
    }

    return this._schema;
  }
}
