/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ValMapSchema } from './ValMapSchema';
import { ValMapSchemaRequestBuilder } from './ValMapSchemaRequestBuilder';
import { ValMapsApi } from './ValMapsApi';
import { DefaultValMapsApi } from './DefaultValMapsApi';
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
export class ValMapSchemaApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ValMapSchema<DeSerializersT>, DeSerializersT>
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
  ): ValMapSchemaApi<DeSerializersT> {
    return new ValMapSchemaApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link valMaps} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VAL_MAPS: Link<
      ValMapSchema<DeSerializersT>,
      DeSerializersT,
      ValMapsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link defaultValMaps} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_VAL_MAPS: Link<
      ValMapSchema<DeSerializersT>,
      DeSerializersT,
      DefaultValMapsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ValMapsApi<DeSerializersT>, DefaultValMapsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      VAL_MAPS: new Link('ValMaps', this, linkedApis[0]),
      DEFAULT_VAL_MAPS: new Link('DefaultValMaps', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = ValMapSchema;

  requestBuilder(): ValMapSchemaRequestBuilder<DeSerializersT> {
    return new ValMapSchemaRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ValMapSchema<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ValMapSchema<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ValMapSchema<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ValMapSchema, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ValMapSchema, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SRC_AGENCY: OrderableEdmTypeField<
      ValMapSchema<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SRC_ID: OrderableEdmTypeField<
      ValMapSchema<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TGT_AGENCY: OrderableEdmTypeField<
      ValMapSchema<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TGT_ID: OrderableEdmTypeField<
      ValMapSchema<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STATE: OrderableEdmTypeField<
      ValMapSchema<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link valMaps} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VAL_MAPS: Link<
      ValMapSchema<DeSerializersT>,
      DeSerializersT,
      ValMapsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link defaultValMaps} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_VAL_MAPS: Link<
      ValMapSchema<DeSerializersT>,
      DeSerializersT,
      DefaultValMapsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ValMapSchema<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link srcAgency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SRC_AGENCY: fieldBuilder.buildEdmTypeField(
          'SrcAgency',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link srcId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SRC_ID: fieldBuilder.buildEdmTypeField('SrcId', 'Edm.String', false),
        /**
         * Static representation of the {@link tgtAgency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TGT_AGENCY: fieldBuilder.buildEdmTypeField(
          'TgtAgency',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link tgtId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TGT_ID: fieldBuilder.buildEdmTypeField('TgtId', 'Edm.String', false),
        /**
         * Static representation of the {@link state} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE: fieldBuilder.buildEdmTypeField('State', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ValMapSchema)
      };
    }

    return this._schema;
  }
}
