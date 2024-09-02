/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { NumberRanges } from './NumberRanges';
import { NumberRangesRequestBuilder } from './NumberRangesRequestBuilder';
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
export class NumberRangesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<NumberRanges<DeSerializersT>, DeSerializersT>
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
  ): NumberRangesApi<DeSerializersT> {
    return new NumberRangesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = NumberRanges;

  requestBuilder(): NumberRangesRequestBuilder<DeSerializersT> {
    return new NumberRangesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    NumberRanges<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<NumberRanges<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<NumberRanges<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof NumberRanges, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(NumberRanges, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAME: OrderableEdmTypeField<
      NumberRanges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      NumberRanges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAX_VALUE: OrderableEdmTypeField<
      NumberRanges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MIN_VALUE: OrderableEdmTypeField<
      NumberRanges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROTATE: OrderableEdmTypeField<
      NumberRanges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENT_VALUE: OrderableEdmTypeField<
      NumberRanges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIELD_LENGTH: OrderableEdmTypeField<
      NumberRanges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEPLOYED_BY: OrderableEdmTypeField<
      NumberRanges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEPLOYED_ON: OrderableEdmTypeField<
      NumberRanges<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    ALL_FIELDS: AllFields<NumberRanges<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link maxValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_VALUE: fieldBuilder.buildEdmTypeField(
          'MaxValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link minValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIN_VALUE: fieldBuilder.buildEdmTypeField(
          'MinValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rotate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROTATE: fieldBuilder.buildEdmTypeField('Rotate', 'Edm.String', true),
        /**
         * Static representation of the {@link currentValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENT_VALUE: fieldBuilder.buildEdmTypeField(
          'CurrentValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fieldLength} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIELD_LENGTH: fieldBuilder.buildEdmTypeField(
          'FieldLength',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deployedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPLOYED_BY: fieldBuilder.buildEdmTypeField(
          'DeployedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deployedOn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPLOYED_ON: fieldBuilder.buildEdmTypeField(
          'DeployedOn',
          'Edm.DateTime',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', NumberRanges)
      };
    }

    return this._schema;
  }
}
