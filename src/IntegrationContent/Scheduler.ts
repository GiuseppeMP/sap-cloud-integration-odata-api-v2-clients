/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v2';

/**
 * Scheduler
 */
export interface Scheduler<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Trigger Type.
   * @nullable
   */
  triggerType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Date Type.
   * @nullable
   */
  dateType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Time Type.
   * @nullable
   */
  timeType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Date.
   * @nullable
   */
  date?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Time.
   * @nullable
   */
  time?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Day Of Month.
   * @nullable
   */
  dayOfMonth?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Monday.
   * @nullable
   */
  monday?: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
  /**
   * Tuesday.
   * @nullable
   */
  tuesday?: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
  /**
   * Wednesday.
   * @nullable
   */
  wednesday?: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
  /**
   * Thursday.
   * @nullable
   */
  thursday?: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
  /**
   * Friday.
   * @nullable
   */
  friday?: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
  /**
   * Saturday.
   * @nullable
   */
  saturday?: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
  /**
   * Sunday.
   * @nullable
   */
  sunday?: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
  /**
   * On Every Duration.
   * @nullable
   */
  onEveryDuration?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * From Interval.
   * @nullable
   */
  fromInterval?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * To Interval.
   * @nullable
   */
  toInterval?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Time Zone.
   * @nullable
   */
  timeZone?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * SchedulerField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class SchedulerField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  Scheduler,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link Scheduler.triggerType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  triggerType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TriggerType', 'Edm.String', true);
  /**
   * Representation of the {@link Scheduler.dateType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dateType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DateType', 'Edm.String', true);
  /**
   * Representation of the {@link Scheduler.timeType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  timeType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TimeType', 'Edm.String', true);
  /**
   * Representation of the {@link Scheduler.date} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  date: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Date', 'Edm.String', true);
  /**
   * Representation of the {@link Scheduler.time} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  time: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Time', 'Edm.String', true);
  /**
   * Representation of the {@link Scheduler.dayOfMonth} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dayOfMonth: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DayOfMonth', 'Edm.String', true);
  /**
   * Representation of the {@link Scheduler.monday} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  monday: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Monday', 'Edm.Boolean', true);
  /**
   * Representation of the {@link Scheduler.tuesday} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  tuesday: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Tuesday', 'Edm.Boolean', true);
  /**
   * Representation of the {@link Scheduler.wednesday} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wednesday: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Wednesday', 'Edm.Boolean', true);
  /**
   * Representation of the {@link Scheduler.thursday} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  thursday: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Thursday', 'Edm.Boolean', true);
  /**
   * Representation of the {@link Scheduler.friday} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  friday: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Friday', 'Edm.Boolean', true);
  /**
   * Representation of the {@link Scheduler.saturday} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  saturday: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Saturday', 'Edm.Boolean', true);
  /**
   * Representation of the {@link Scheduler.sunday} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sunday: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Sunday', 'Edm.Boolean', true);
  /**
   * Representation of the {@link Scheduler.onEveryDuration} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  onEveryDuration: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'OnEveryDuration',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link Scheduler.fromInterval} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fromInterval: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FromInterval', 'Edm.String', true);
  /**
   * Representation of the {@link Scheduler.toInterval} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  toInterval: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ToInterval', 'Edm.String', true);
  /**
   * Representation of the {@link Scheduler.timeZone} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  timeZone: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TimeZone', 'Edm.String', true);

  /**
   * Creates an instance of SchedulerField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, Scheduler, fieldOptions);
  }
}

export namespace Scheduler {
  /**
   * Metadata information on all properties of the `Scheduler` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<Scheduler>[] = [
    {
      originalName: 'TriggerType',
      name: 'triggerType',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DateType',
      name: 'dateType',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TimeType',
      name: 'timeType',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Date',
      name: 'date',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Time',
      name: 'time',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DayOfMonth',
      name: 'dayOfMonth',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Monday',
      name: 'monday',
      type: 'Edm.Boolean',
      isCollection: false
    },
    {
      originalName: 'Tuesday',
      name: 'tuesday',
      type: 'Edm.Boolean',
      isCollection: false
    },
    {
      originalName: 'Wednesday',
      name: 'wednesday',
      type: 'Edm.Boolean',
      isCollection: false
    },
    {
      originalName: 'Thursday',
      name: 'thursday',
      type: 'Edm.Boolean',
      isCollection: false
    },
    {
      originalName: 'Friday',
      name: 'friday',
      type: 'Edm.Boolean',
      isCollection: false
    },
    {
      originalName: 'Saturday',
      name: 'saturday',
      type: 'Edm.Boolean',
      isCollection: false
    },
    {
      originalName: 'Sunday',
      name: 'sunday',
      type: 'Edm.Boolean',
      isCollection: false
    },
    {
      originalName: 'OnEveryDuration',
      name: 'onEveryDuration',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'FromInterval',
      name: 'fromInterval',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ToInterval',
      name: 'toInterval',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TimeZone',
      name: 'timeZone',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
