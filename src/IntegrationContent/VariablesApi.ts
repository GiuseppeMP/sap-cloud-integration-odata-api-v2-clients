/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Variables } from './Variables';
import { VariablesRequestBuilder } from './VariablesRequestBuilder';
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
export class VariablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Variables<DeSerializersT>, DeSerializersT>
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
  ): VariablesApi<DeSerializersT> {
    return new VariablesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Variables;

  requestBuilder(): VariablesRequestBuilder<DeSerializersT> {
    return new VariablesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Variables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Variables<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Variables<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Variables, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Variables, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    VARIABLE_NAME: OrderableEdmTypeField<
      Variables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INTEGRATION_FLOW: OrderableEdmTypeField<
      Variables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VISIBILITY: OrderableEdmTypeField<
      Variables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UPDATED_AT: OrderableEdmTypeField<
      Variables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    RETAIN_UNTIL: OrderableEdmTypeField<
      Variables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    ALL_FIELDS: AllFields<Variables<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link variableName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VARIABLE_NAME: fieldBuilder.buildEdmTypeField(
          'VariableName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link integrationFlow} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTEGRATION_FLOW: fieldBuilder.buildEdmTypeField(
          'IntegrationFlow',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link visibility} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VISIBILITY: fieldBuilder.buildEdmTypeField(
          'Visibility',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link updatedAt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UPDATED_AT: fieldBuilder.buildEdmTypeField(
          'UpdatedAt',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link retainUntil} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIN_UNTIL: fieldBuilder.buildEdmTypeField(
          'RetainUntil',
          'Edm.DateTime',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Variables)
      };
    }

    return this._schema;
  }
}
