/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Configurations } from './Configurations';
import { ConfigurationsRequestBuilder } from './ConfigurationsRequestBuilder';
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
export class ConfigurationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Configurations<DeSerializersT>, DeSerializersT>
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
  ): ConfigurationsApi<DeSerializersT> {
    return new ConfigurationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Configurations;

  requestBuilder(): ConfigurationsRequestBuilder<DeSerializersT> {
    return new ConfigurationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Configurations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Configurations<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Configurations<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Configurations, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Configurations, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PARAMETER_KEY: OrderableEdmTypeField<
      Configurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PARAMETER_VALUE: OrderableEdmTypeField<
      Configurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATA_TYPE: OrderableEdmTypeField<
      Configurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<Configurations<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link parameterKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARAMETER_KEY: fieldBuilder.buildEdmTypeField(
          'ParameterKey',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link parameterValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARAMETER_VALUE: fieldBuilder.buildEdmTypeField(
          'ParameterValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dataType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_TYPE: fieldBuilder.buildEdmTypeField(
          'DataType',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Configurations)
      };
    }

    return this._schema;
  }
}
